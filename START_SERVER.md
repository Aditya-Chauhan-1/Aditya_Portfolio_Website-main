# Start the Next.js Portfolio

Install dependencies and run the website and contact-form API together:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The Next.js app serves both the portfolio and `/api/send-email`; no separate Express server or CORS setup is required.

To enable contact-form delivery, add `.env.local` in the project root:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=aadityachauhan6395@gmail.com
FROM_EMAIL=onboarding@resend.dev
```

Keep `RESEND_API_KEY` server-side and never commit `.env.local`.

For production, build and start Next.js:

```bash
npm run build
npm start
```
