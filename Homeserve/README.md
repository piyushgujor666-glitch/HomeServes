# FixMate Customer Frontend

A polished, responsive React/Vite frontend for the FixMate home-services experience.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Routes

- `/login`
- `/signup`
- `/forgot`
- `/home`
- `/services`
- `/book-service`
- `/bookings`
- `/notifications`
- `/profile`

## Location data

The booking form loads Indian States/UTs, districts and postal localities dynamically from the public India Pincode API. This keeps the frontend lightweight instead of bundling a very large geography file into the project. The source publishes state/district data and district-level postal offices with PIN codes, and is sourced from Department of Posts data via data.gov.in.

The booking form uses those postal localities as the `Village / Locality` selector and automatically fills the PIN code when an area is selected. A PIN lookup is also available when the user enters a six-digit PIN.

## Scope

This is a frontend/demo application. Login, booking confirmation, notifications and profile controls are UI flows until a backend/database is connected.
