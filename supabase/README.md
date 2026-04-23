# Supabase setup

This app now expects Supabase as the production backend.

## What to create in Supabase

1. A project
2. Email/Password auth enabled
3. Run `schema.sql` in the SQL editor
4. Create Edge Functions:
   - `admin-create-user`
   - `checkout-order`
   - `delete-order`
   - `generate-receipt-pdf`

## Frontend config

Put your project values in `supabase-config.js`:

- `url`
- `anonKey`

## Admin seed account

Create the first admin in Supabase Auth using:

- email: `nilaa-os0809$@nilaa-os.local`
- password: `08090809`

Then insert the matching row in `users` with role `admin`.

The site login still uses username `nilaa-os0809$`. The frontend maps it to the internal email automatically.
