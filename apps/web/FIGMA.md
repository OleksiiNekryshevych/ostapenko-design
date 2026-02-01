Setup and usage for Figma MCP (web app)

1) Set environment variables (recommended):

On macOS/zsh, add to your shell or run before starting VS Code or MCP:

```bash
export FIGMA_API_KEY="figd_your_real_key_here"
export FIGMA_WEB_FILE_ID="<your-figma-file-id>"
```

2) Verify you can list files/projects with the MCP server (uses `npx` to run the MCP package):

```bash
npx -y figma-developer-mcp list-files --api-key "$FIGMA_API_KEY"
```

3) To fetch a file or node, use:

```bash
npx -y figma-developer-mcp get-file --api-key "$FIGMA_API_KEY" --file-id "$FIGMA_WEB_FILE_ID"
```

Notes:
- `.vscode/mcp.json` is configured to use `${env:FIGMA_API_KEY}`. Set the env var in your environment or in VS Code's environment before launching.
- Avoid committing real API keys into the repo. Keep them in your shell profile or secret manager.
