from fastapi import Header, HTTPException
import httpx

from config import get_settings
from schemas import AuthenticatedUser


async def get_current_user(authorization: str = Header(None)) -> AuthenticatedUser:
    """
    FastAPI dependency that extracts and validates the Supabase JWT from the Authorization header.
    Calls Supabase Auth API directly to authenticate.
    """
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(
            status_code=401, 
            detail="Authentication credentials missing or malformed"
        )
    
    token = authorization.split(" ", 1)[1].strip()
    if not token:
        raise HTTPException(
            status_code=401,
            detail="Authentication credentials missing or malformed",
        )

    settings = get_settings()
    if not settings.supabase_configured:
        raise HTTPException(
            status_code=500, 
            detail="Server configuration error: Supabase variables missing"
        )
        
    # Standard Supabase auth user verification endpoint
    url = f"{settings.supabase_url.rstrip('/')}/auth/v1/user"
    headers = {
        "Authorization": f"Bearer {token}",
        "apikey": settings.supabase_anon_key,
    }
    
    try:
        async with httpx.AsyncClient(timeout=settings.supabase_timeout_seconds) as client:
            response = await client.get(url, headers=headers)
    except httpx.RequestError as exc:
        raise HTTPException(
            status_code=503,
            detail=f"Network error during authentication: {exc}",
        )

    if response.status_code != 200:
        raise HTTPException(
            status_code=401,
            detail="Authentication failed: invalid or expired session token",
        )

    try:
        user_info = response.json()
    except ValueError:
        raise HTTPException(
            status_code=503,
            detail="Authentication failed: Supabase returned invalid JSON",
        )

    user_id = user_info.get("id")
    if not user_id:
        raise HTTPException(
            status_code=503,
            detail="Authentication failed: Supabase response missing user id",
        )

    return AuthenticatedUser(
        id=user_id,
        email=user_info.get("email"),
        access_token=token,
        raw=user_info,
    )
