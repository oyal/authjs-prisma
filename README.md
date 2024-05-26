## Description

This is a simple authentication system that uses Next.js 14, Authjs v5 and Prisma. It supports authentication with email and password, GitHub and Google.

![image](https://github.com/oyal/authjs-prisma/assets/88022434/1fdf9151-e4d8-4138-9e44-c76db650e14e)

![image](https://github.com/oyal/authjs-prisma/assets/88022434/0841f228-4266-478b-96df-f4433b7e456d)

## Getting Started

1. Clone the repository and install the dependencies

```bash
git clone https://github.com/oyal/authjs-prisma.git
cd authjs-prisma
npm install
```

2. Configure the environment variables

Copy the `.env.example` file to `.env` and fill in the required values.

```bash
cp .env.example .env
```

3. Database setup

Update the `DATABASE_URL` in the `.env` file with your database connection string.

```bash
npx prisma db push
```

4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
