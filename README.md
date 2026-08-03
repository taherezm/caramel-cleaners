# Caramel Cleaners

Source for [caramelcleaners.com](https://caramelcleaners.com), a responsive
marketing and online-booking website for Caramel Cleaners.

The current site helps customers compare cleaning services, understand the
company's cleaner standards, and see how the online booking process will work.
The BookingKoala integration is implemented, but the live form URL still needs
to be configured before customers can complete a booking.

## Current experience

- `/` — marketing homepage with the three-step booking process, cleaner trust
  standards, and comparison cards for Routine, Detailed / First, and Move-In /
  Move-Out cleaning.
- `/book/` — branded booking page. The live deployment currently shows the
  safe missing-configuration state; after an HTTPS BookingKoala URL is added,
  it provides a responsive iframe, loading state, and link to open the secure
  form in a separate window.
- `/thank-you/` — post-booking confirmation page.
- Responsive desktop and mobile layouts, including a mobile booking dock.
- Accessible skip links, focus handling, reduced-motion support, native
  collapsible service details, and interactive logo/scroll animations.
- Search and social metadata, circular favicon assets, and an installable web
  app manifest.
- Vendor-neutral booking events dispatched as `caramel:analytics` and pushed to
  `window.dataLayer` when one is available.

## Technology

- Next.js 16 and React 19
- Vinext and Vite 8
- TypeScript
- Tailwind CSS 4 via PostCSS
- Static export hosted on GitHub Pages

## Local development

Requirements:

- Node.js 22.13 or newer
- pnpm 11.9.0

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

To connect the booking form locally, copy the example environment file and add
the HTTPS form URL from BookingKoala:

```bash
cp .env.example .env.local
```

```dotenv
NEXT_PUBLIC_BOOKINGKOALA_EMBED_URL=https://your-bookingkoala-form-url
```

Restart the development server after changing the environment variable. When
the variable is missing, malformed, or does not use HTTPS, `/book/` displays a
safe "Online booking is being connected" message instead of an iframe.

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the Vinext development server. |
| `pnpm build` | Generate the static site in `dist/client`. |
| `pnpm test` | Build the site and run the rendered HTML and asset tests. |
| `pnpm lint` | Run ESLint. |
| `pnpm check` | Run Vinext project checks. |
| `pnpm start` | Serve the production build with Vinext. |

## Project structure

```text
app/
  page.tsx                  Homepage
  book/page.tsx             Booking experience
  thank-you/page.tsx        Booking confirmation
  components/               Shared interactive components
  globals.css               Site-wide layout and visual system
public/                     Brand, social, favicon, and PWA assets
tests/rendered-html.test.mjs Static-output and regression tests
.github/workflows/          GitHub Pages deployment
BOOKINGKOALA_SETUP.md       Booking form configuration and launch checklist
```

## Booking and analytics

BookingKoala remains the source of live availability, pricing, customer data,
and payment handling. The website embeds only an explicitly configured HTTPS
form URL and does not inspect iframe contents or collect booking details.

The site emits these browser events:

- `book_now_click`
- `booking_page_view`
- `booking_fallback_click`
- `completed_booking_page_view`

See [BOOKINGKOALA_SETUP.md](./BOOKINGKOALA_SETUP.md) for service pricing,
BookingKoala form configuration, manual-review rules, analytics behavior, and
the launch QA checklist.

## Deployment

Pushes to `main` run the GitHub Actions Pages workflow. It installs the locked
pnpm dependencies, builds the static export with the repository-level
`NEXT_PUBLIC_BOOKINGKOALA_EMBED_URL` Actions variable, and deploys
`dist/client` to GitHub Pages.
