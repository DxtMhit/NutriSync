---
trigger: always_on
---

# VERIFICATION & VALIDATION BOUNDARIES
- **No Self-Verification:** You are strictly forbidden from automatically running test suites, executing build commands, or launching browser sandboxes to verify your code changes.
- **Hand-off Requirement:** Stop immediately after code generation or file modifications are complete. Do not attempt to confirm if the fix works.
- **Manual Checklist Provision:** At the completion of every task, output a clear, structured "### Manual Verification Steps". Provide explicit, step-by-step instructions (e.g., specific terminal commands to run, URLs to visit, or UI components to check) so that I can perform the verification myself.