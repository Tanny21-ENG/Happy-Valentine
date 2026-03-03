```markdown
# Happy-Valentine
Simple static Valentine site with optional local API server.

## Local API (optional)

A simple Node/Express server is included to serve the static site and provide a sample API endpoint.

Run:

```bash
npm install
npm start
```

Endpoint:

- `GET /status` — returns JSON `{ status: 'ok', time: '...' }`

Server file: `server.js` (project root)
```
