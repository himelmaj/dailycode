# DailyCode

DailyCode is a platform where I publish daily coding challenges, including problem statements and solutions.

## Technologies

- **Backend**: [Strapi](https://strapi.io/) (in `/server`)
- **Frontend**: [Next.js](https://nextjs.org/) (in `/client`)

## Project Structure

```
/dailycode
│── /server   # Backend (Strapi)
│── /client   # Frontend (Next.js)
│── README.md # Project documentation
```

## Installation

### Backend (Strapi)
1. Navigate to the backend folder:
   ```sh
   cd server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm run develop
   ```
   This will launch Strapi in development mode.

### Frontend (Next.js)
1. Navigate to the frontend folder:
   ```sh
   cd client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
   The application will be available at `http://localhost:3000`.

## Environment Variables

Create a `.env` file in `/server` and another in `/client` with the necessary configurations.  

Example for Strapi (`/server/.env`):  
```env
HOST=0.0.0.0
PORT=1337

APP_KEYS=key1,key2,key3,key4

API_TOKEN_SALT=
ADMIN_JWT_SECRET=
TRANSFER_TOKEN_SALT=


DATABASE_CLIENT=postgres
DATABASE_URL=

JWT_SECRET=
```

Example for Next.js (`/client/.env.local`):  
```env
STRAPI_URL=http://localhost:1337
STRAPI_TOKEN=
```

## Deployment

To deploy in production, follow these steps:

1. **Backend (Strapi):** You can deploy it on platforms like DigitalOcean, Heroku, or Render.
2. **Frontend (Next.js):** It can be easily deployed on [Vercel](https://vercel.com/).

## Repository Usage

This is a personal project, but if you wish to use this repository as a reference or base for your own project, feel free to do so.

## License

This project is licensed under the MIT License.