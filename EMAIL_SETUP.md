# Email Service Setup Guide

This guide will help you set up the email service for your contact form.

## Overview

The contact form now sends two emails:

1. **To You**: A notification with the visitor's message
2. **To the Visitor**: A confirmation email thanking them for reaching out

## Setup Instructions

### Step 1: Choose an Email Provider

You can use any SMTP provider. Here are some popular options:

#### Option A: Gmail (Free)

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable "2-Step Verification"
3. Generate an [App Password](https://myaccount.google.com/apppasswords)
4. Use these credentials for SMTP

#### Option B: Brevo (formerly Sendinblue)

1. Sign up at [brevo.com](https://www.brevo.com)
2. Go to SMTP settings
3. Get your SMTP credentials

#### Option C: SendGrid

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create an API key
3. Use SMTP configuration

#### Option D: Mailgun

1. Sign up at [mailgun.com](https://www.mailgun.com)
2. Get your SMTP credentials from Domain Settings

### Step 2: Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:

   ```bash
   cp .env.local.example .env.local
   ```

2. Update `.env.local` with your SMTP credentials:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   SMTP_FROM_EMAIL=your-email@gmail.com
   PORTFOLIO_EMAIL=caffeinatedreader77@gmail.com
   ```

### Step 3: Restart Your Development Server

```bash
npm run dev
```

## Email Provider Specific Configurations

### Gmail

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-16-char-app-password
```

### Brevo

```
SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-brevo-email@example.com
SMTP_PASSWORD=your-brevo-smtp-key
```

### SendGrid

```
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
```

### Mailgun

```
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=postmaster@yourdomain.com
SMTP_PASSWORD=your-mailgun-password
```

## File Locations

- **API Route**: `app/api/contact/route.ts` - Handles form submissions
- **Email Service**: `lib/email.ts` - Email sending logic
- **Contact Component**: `components/Contact.tsx` - Form UI with state management

## Features

✅ Form validation (name, email, subject, message required)
✅ Email format validation
✅ Loading state while sending
✅ Success/error notifications to the user
✅ HTML-formatted emails with styling
✅ Automatic reply email to the visitor

## Troubleshooting

### "Failed to send message"

- Check that all environment variables are correctly set
- Verify SMTP credentials are correct
- Ensure the SMTP server port is correct (usually 587 or 465)

### "Invalid email format"

- Make sure you're using a valid email address
- Gmail app passwords must be 16 characters

### Emails not arriving

- Check spam/junk folder
- Verify SMTP_FROM_EMAIL matches your email account
- Check email provider's sending limits

## Testing

To test locally:

1. Fill out the contact form
2. Submit the form
3. Check both your email and the visitor's email for messages

## Production Deployment

When deploying to production:

1. Set environment variables in your hosting provider (Vercel, Netlify, etc.)
2. Keep `.env.local` out of version control (already in .gitignore)
3. Use a production email provider for reliability
