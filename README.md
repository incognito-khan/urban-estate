# urban-estate

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

A few project-specific notes and setup steps have been added below to reflect repository dependencies and configuration (Prisma, Cloudinary, JWT, admin assets).

## Prerequisites

- Node.js (use a recent LTS; this project uses recent Next.js and Prisma versions)
- npm (or pnpm / yarn)
- A database (Postgres / other supported by Prisma) if you plan to run the full backend features

## Getting Started

Install dependencies:

```bash
npm install
# or
# yarn
# or
# pnpm install
```

Create a local environment file `.env` in the repository root. Typical environment variables used by this project include (add values appropriate for your setup):

```
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
JWT_SECRET="your_jwt_secret"
CLOUDINARY_CLOUD_NAME="..."
CLOUDINARY_API_KEY="..."
CLOUDINARY_API_SECRET="..."
```

(Exact environment variables may vary depending on which features you use; check server-side code for any additional required keys.)

Prisma (database):

This project includes Prisma (see `prisma/schema.prisma`). After setting `DATABASE_URL`:

```bash
# generate Prisma client
npx prisma generate

# create and apply a migration (interactive)
npx prisma migrate dev --name init

# open Prisma Studio (UI)
npx prisma studio
```

Start the development server:

```bash
npm run dev
# or
# yarn dev
# or
# pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The app entry is in the `app/` directory (for example `app/page.js`). The page will auto-update as you edit files.

## Available scripts

- `npm run dev` — run Next.js in development mode
- `npm run build` — build for production
- `npm run start` — start the production server after build
- `npm run lint` — run ESLint

## Admin assets

This repo includes admin UI assets under `public/admin/`:

- Bootstrap SCSS (Bootstrap v4.6.0 partials are present at `public/admin/vendor/bootstrap/scss/`)
- Font Awesome (v5.15.3) is present under `public/admin/vendor/fontawesome-free/`

If you work on the admin UI, these are the bundled vendor files the templates rely on.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
