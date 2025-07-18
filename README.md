# TraceCortex Backend

This is a Node.js + Express backend to handle logins and case submissions.

## Routes

- POST `/login` – accepts `{ email }`
- POST `/start-case` – accepts case data as JSON

## Running locally

1. Install Node.js
2. Run `npm install`
3. Create a `.env` file with `PORT=5000`
4. Run `node server.js`

## Deploy

Use Render.com:
- Create a new Web Service
- Connect to your GitHub repo
- Use "node server.js" as the start command