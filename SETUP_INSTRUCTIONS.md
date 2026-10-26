# 🚀 Quick Setup Instructions

## ✅ Step 1: Get Your Resend API Key

1. Visit: https://resend.com/api-keys
2. Sign up/Login to Resend
3. Create a new API key
4. Copy the API key (starts with `re_`)

## ✅ Step 2: Update .env.local File

Open or create `.env.local` in the project root and add:

```env
RESEND_API_KEY=your_resend_api_key_here
```

With your actual API key:

```env
RESEND_API_KEY=re_your_actual_api_key_from_resend
```

## ✅ Step 3: Verify Email Settings

The `.env.local` file should look like this:

```env
# Resend API Configuration
RESEND_API_KEY=re_your_actual_api_key_here

# Your Email Address (where you want to receive emails)
REACT_APP_CONTACT_EMAIL=aadityachauhan6395@gmail.com

# From Email (use onboarding@resend.dev for testing)
REACT_APP_FROM_EMAIL=onboarding@resend.dev
```

## ✅ Step 4: Restart Development Server

**IMPORTANT:** After updating `.env.local`, you MUST restart your server:

1. Stop the current server (Ctrl+C)
2. Run: `npm start`

## ✅ Step 5: Test the Contact Form

1. Fill out the contact form on your website
2. Submit it
3. Check your email: **aadityachauhan6395@gmail.com**
4. You should receive a beautifully formatted email! 📧

---

## 🔒 Security Notes

- ✅ `.env.local` file is already in `.gitignore` (safe from Git)
- ⚠️ Never share your API key publicly
- ✅ For production, verify your domain in Resend

## 🆘 Troubleshooting

**Email not sending?**
- ✅ Check `RESEND_API_KEY` is correct
- ✅ Restart server after updating `.env.local`
- ✅ Check browser console for errors
- ✅ Verify API key starts with `re_`

**Need help?**
- Resend Docs: https://resend.com/docs
- Check `README_EMAIL_SETUP.md` for detailed guide

---

**That's it! Your contact form is now ready to send emails! 🎉**
