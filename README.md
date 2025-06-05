# Triple Whale MCP Server

Exposes selected Triple Whale KPIs over an SSE endpoint for OpenAI MCP.

## Env Vars

- `TRIPLEWHALE_API_KEY` – your Triple Whale API key (server-side only)

## Example

```bash
curl -N https://triplewhale-mcp.vercel.app/sse | head -20
```
