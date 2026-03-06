# Taylor Stib's Personal Site

A personal site built with **Next.js 14** (App Router), **Prisma ORM**, and **Neon** (serverless PostgreSQL).

## Stack

- [Next.js 14](https://nextjs.org/) — React framework with App Router
- [Prisma](https://www.prisma.io/) — Type-safe ORM
- [Neon](https://neon.tech/) — Serverless PostgreSQL
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling

## Setup

1. **Clone the repo**

   ```bash
   git clone https://github.com/taylorstib/taylorstib.github.io.git
   cd taylorstib.github.io
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   ```bash
   cp .env.example .env
   ```

   Open `.env` and fill in your Neon connection string:

   ```
   DATABASE_URL="postgresql://user:password@host/dbname?sslmode=require"
   ```

4. **Generate the Prisma client**

   ```bash
   npx prisma generate
   ```

5. **Push the schema to your database**

   ```bash
   npx prisma db push
   ```

6. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Routes

| Method | Path         | Description         |
| ------ | ------------ | ------------------- |
| GET    | `/api/users` | Fetch all users     |
| POST   | `/api/users` | Create a new user   |

### Example POST body

```json
{
  "email": "user@example.com",
  "name": "Jane Doe"
}
```
