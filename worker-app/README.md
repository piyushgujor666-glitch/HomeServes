# FixMate Worker App

A responsive React + Vite worker portal for FixMate service professionals.

## Features

- Dashboard with worker stats and smart workday insight
- Orders list with filters and order details
- Earnings dashboard with monthly chart, payout card and transaction filters
- Smart Schedule page with day selection, timeline and workload insight
- Profile and profile-management pages
- Responsive desktop navigation
- App-style fixed mobile bottom navigation
- Extra bottom-safe spacing so content is never hidden behind mobile navigation
- Dark/light theme toggle in the header
- Notification dropdown
- Smooth hover, lift, scale and focus interactions
- React Router based page structure with a single shared Layout
- No duplicate Header/Footer rendering inside individual pages

## Routes

- `/login`
- `/signup`
- `/forgot`
- `/dashboard`
- `/orders`
- `/orders/:orderId`
- `/earning`
- `/schedule`
- `/profile`
- `/profile/personal`
- `/profile/kyc`
- `/profile/experience`
- `/profile/certificates`

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
