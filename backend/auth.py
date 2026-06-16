import os
from fastapi import Header, HTTPException, Depends
import httpx
from dotenv import load_dotenv

# Load local .env variables
load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_ANON_KEY = os.getenv("SUPABASE_ANON_KEY")

async def get_current_user(authorization: str = Header(None)):
    """
    FastAPI dependency that extracts and validates the Supabase JWT from the Authorization header.
    Calls Supabase Auth API directly to authenticate.
    """
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(
            status_code=401, 
            detail="Authentication credentials missing or malformed"
        )
    
    token = authorization.split(" ")[1]
    
    if not SUPABASE_URL or not SUPABASE_ANON_KEY:
        raise HTTPException(
            status_code=500, 
            detail="Server configuration error: Supabase variables missing"
        )
        
    # Standard Supabase auth user verification endpoint
    url = f"{SUPABASE_URL.rstrip('/')}/auth/v1/user"
    headers = {
        "Authorization": f"Bearer {token}",
        "apikey": SUPABASE_ANON_KEY
    }
    
    async with httpx.AsyncClient() as client:
        try:
            response = await client.get(url, headers=headers)
            if response.status_code != 200:
                raise HTTPException(
                    status_code=401, 
                    detail="Authentication failed: invalid or expired session token"
                )
            
            user_info = response.json()
            # Returns user profile metadata containing user_info['id'] (UUID)
            return user_info
        except httpx.RequestError as exc:
            raise HTTPException(
                status_code=503, 
                detail=f"Network error during authentication: {exc}"
            )
