# Caramel Cleaners

Primary development repository for the Caramel Cleaners website.

## Local development

Install dependencies and start the preview:

```bash
pnpm install
pnpm dev
```

The site is built as a static export and deployed to GitHub Pages from `main`.

## Booking

The dedicated booking experience lives at `/book/` and is designed to host the
secure BookingKoala form. Copy `.env.example` to `.env.local` and add the
BookingKoala HTTPS embed URL to preview the connected form locally.

See [BOOKINGKOALA_SETUP.md](./BOOKINGKOALA_SETUP.md) for pricing, form
configuration, GitHub Pages setup, and the launch checklist.
