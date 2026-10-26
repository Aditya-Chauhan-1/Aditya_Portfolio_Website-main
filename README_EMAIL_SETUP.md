# Email Setup Guide - Resend API

This guide will help you set up the Resend API for the contact form.

## Step 1: Get Your Resend API Key

1. Go to [https://resend.com/api-keys](https://resend.com/api-keys)
2. Sign up or log in to your Resend account
3. Create a new API key
4. Copy the API key (you'll need it in the next step)

## Step 2: Configure Environment Variables

1. In the root directory of your project, create a `.env.local` file:
   ```bash
   copy .env.example .env.local
   ```

3. Open `.env.local` and add your actual values:

   ```env
   # Server-only Resend secret. Never use the REACT_APP_ prefix for secrets.
   RESEND_API_KEY=re_your_actual_api_key_here

   # Your Email Address (where you want to receive contact form emails)
   REACT_APP_CONTACT_EMAIL=aadityachauhan6395@gmail.com

   # From Email (should be verified in Resend)
   # For testing, you can use: onboarding@resend.dev
   # For production, verify your own domain in Resend
   REACT_APP_FROM_EMAIL=onboarding@resend.dev
   ```

## Step 3: Verify Your Domain (Optional but Recommended for Production)

1. Go to [Resend Dashboard](https://resend.com/domains)
2. Add and verify your domain
3. Update `REACT_APP_FROM_EMAIL` in `.env.local` to use your verified domain email

## Step 4: Restart Your Development Server

After updating the `.env` file, restart your React development server:

```bash
npm start
```

## Important Notes

- ⚠️ **Never commit your `.env.local` file to Git** - it's already in `.gitignore`
- ✅ The `.env.example` file is safe to commit (it doesn't contain real keys)
- 🔒 Keep your API key secure and don't share it publicly
- 📧 For production, make sure to verify your domain in Resend

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox (aadityachauhan6395@gmail.com)
4. You should receive a beautifully formatted email with all the form details

## Troubleshooting

### Email not sending?
- Check that `RESEND_API_KEY` is set in `.env.local` locally and as a server-side environment variable in Vercel
- Restart the local server or redeploy Vercel after changing environment variables
- Check the browser console for any error messages
- Verify your Resend API key has the correct permissions

### API Key Issues?
- Make sure the API key starts with `re_`
- Ensure there are no extra spaces in the `.env` file
- Check that the variable name is exactly `RESEND_API_KEY`; do not use a `REACT_APP_` prefix for secrets

## Support

For Resend API issues, visit: [https://resend.com/docs](https://resend.com/docs)
