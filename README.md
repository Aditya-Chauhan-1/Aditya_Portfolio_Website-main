# Aditya Chauhan Portfolio

The portfolio is built with Next.js App Router. The home page contains the portfolio sections, and `/achievements` redirects to the achievements section on the home page.

## Requirements

- Node.js 18.18 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Create a `.env.local` file in the project root to enable the contact form:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_inbox@example.com
FROM_EMAIL=onboarding@resend.dev
```

`RESEND_API_KEY` is server-only and must not use a `NEXT_PUBLIC_` prefix. See [README_EMAIL_SETUP.md](./README_EMAIL_SETUP.md) for email setup details.

## Production

```bash
npm run build
npm start
```

The application and its contact-form API run together in Next.js. Deploy it to a Next.js-compatible host such as Vercel, and configure the email environment variables there.
