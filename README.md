# SecureAuth - Next.js Authentication System

SecureAuth is a modern, secure, and user-friendly authentication system built with Next.js, Prisma, and NextAuth.js. It provides a robust foundation for adding authentication to your Next.js applications.

## Features

- User registration and login
- Password reset functionality
- Profile management (view and update user information)
- Secure password hashing with bcrypt
- JWT-based authentication
- Protected routes
- Responsive design using Tailwind CSS

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- npm or yarn
- PostgreSQL database

## Getting Started

1. Clone the repository:

git clone https://github.com/corentincode/next-auth-secure.git
cd next-auth-secure


2. Install dependencies:

npm install


3. Set up your environment variables:
Create a `.env` file in the root directory and add the following variables:

DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret"
RESEND_API_KEY="your-resend-api-key"

Replace the placeholders with your actual database credentials and Resend API key.

4. Set up the database:

npx prisma migrate dev


5. Run the development server:

npm run dev


6. Open http://localhost:3000 in your browser to see the application.

## Customization

To integrate this authentication system into your project, you'll need to:

1. Update the database schema in `prisma/schema.prisma` to include your application-specific models.

2. Modify the UI components in the `app` directory to match your application's design.

3. Update the email templates in `lib/email.ts` to fit your branding and messaging.

4. Adjust the authentication options in `app/api/auth/[...nextauth]/route.ts` if you need additional providers or custom callbacks.

5. Implement your own protected routes and components using the provided authentication hooks and components.

## Key Components

- `app/layout.tsx`: The root layout component that wraps the entire application with the SessionProvider.
- `app/api/auth/[...nextauth]/route.ts`: NextAuth.js configuration and API routes for authentication.
- `app/auth/*`: Components for sign in, sign up, and password reset pages.
- `app/profile/page.tsx`: User profile page with password change and account deletion functionality.
- `app/dashboard/page.tsx`: Example of a protected route that displays user information.

## Environment Variables

Make sure to set the following environment variables:

- `DATABASE_URL`: Your PostgreSQL database connection string.
- `NEXTAUTH_URL`: The base URL of your application (e.g., `http://localhost:3000` for local development).
- `NEXTAUTH_SECRET`: A secret key for NextAuth.js (you can generate one using `openssl rand -base64 32`).
- `RESEND_API_KEY`: Your API key for the Resend email service.

## Dependencies

This project uses the following main dependencies:
- Next.js
- NextAuth.js
- Prisma
- bcryptjs
- Resend (for email sending)
- Tailwind CSS

Refer to `package.json` for a complete list of dependencies and their versions.

## Usage

1. Register a new user account using the sign-up page.
2. Log in using your credentials.
3. Access the dashboard and profile pages to see protected content.
4. Use the "Forgot Password" feature to reset your password if needed.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
