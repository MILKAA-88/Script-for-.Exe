If you want to generate an application with Electron, you can use these files.

# Help 

If you need help, here are my social networks: 

Discord: milka330_47221

Instagram: milkaa_km

# Security explanation 

'nodeIntegration: true' have several security flaws, especially if an attacker manages to inject malicious code (for example via an XSS vulnerability or content loaded from an untrusted source), he can execute arbitrary system commands on the user’s machine.

'contextIsolation: false' means that the render process code and Node.js code share the same execution context.

Risk: A malicious script can access sensitive variables or objects (such as authentication tokens, API keys, or user data) from the main process or other windows.
