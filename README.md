# Definitics Road Intelligence

A React and TypeScript frontend for a road condition enterprise portal, inspired by the public capabilities of RoadBounce RB Enterprise. It is a new interface for Definitics Software Solutions Private Limited. The preview uses **illustrative sample data**; no real road survey records or credentials are included.

## Run locally

Requires Node 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the URL printed by Vite. Use **Explore sample workspace** to inspect the portal without a server. `npm run build` creates a static production bundle in `dist/`.

## Backend connection

Copy `.env.example` to `.env` and set `VITE_API_BASE_URL` to the backend URL. The default `/api` is same-origin; Vite proxies it to `http://localhost:3001` during development. Change the proxy target in `vite.config.ts` as needed. The API adapter is in `src/api.ts`; sample types are in `src/data.ts`.

The frontend currently expects JSON and these endpoints:

| Method | Path | Expected response |
| --- | --- | --- |
| `POST` | `/auth/login` | `{ "id": "...", "name": "...", "email": "...", "role": "..." }` |
| `GET` | `/auth/me` | Same user object, or HTTP 401 |
| `POST` | `/auth/logout` | HTTP 200 with JSON response |
| `GET` | `/dashboard` | `{ "segments": RoadSegment[], "defects": Defect[], "monthly": number[], "updatedAt": "..." }` |

The `RoadSegment`, `Defect`, and `DashboardData` interfaces in `src/data.ts` define the expected fields. Map routes are illustrative SVG artwork; replace `NetworkMap` with a GIS component and segment geometry from your backend for geographic accuracy. The frontend does not know the production RoadBounce portal's private endpoint paths, auth format, or server framework. Public RoadBounce material describes REST APIs and dashboard capabilities, not a verified backend implementation.

### Authentication and password handling

Login posts the password only to the configured backend and uses `credentials: 'include'` for an HTTP-only session cookie. The frontend does not store credentials, access tokens, or password hashes in local storage. Deploy over HTTPS. The backend must hash passwords with Argon2id or bcrypt (with unique salts), verify them server side, set `Secure`, `HttpOnly`, and suitable `SameSite` cookie attributes, enforce authorization on every endpoint, provide CSRF protection where applicable, and rate limit login attempts. A frontend cannot provide password encryption or secure authentication by itself. Sample mode is explicitly separate from an authenticated session and uses local illustrative data.

## Current scope

The dashboard, map illustration, search and filters, details, defect table, report navigation, CSV export, responsive layout, and sample preview are implemented. Server persistence, real GIS layers, field workflows, document vault, and live data refresh require backend data and contracts.
