# ScocialAd

## Description

Welcome to our Social Media Website! This full-stack application allows users to connect, share content, and interact in a dynamic online environment. Built with the latest technologies, this platform offers features such as posting multimedia content, interacting through likes and comments, and engaging with real-time chat.

## Features

- **Post Content**: Share text posts, photos, and videos.
- **Likes & Comments**: Interact with posts through likes and comments.
- **Bookmarking**: Save your favorite posts for easy access later.
- **User Following**: Follow other users to see their posts in your feed.
- **Feeds**:
  - _All New Posts Feed_: View the latest posts from all users.
  - _Following Feed_: See posts from users you follow.
- **Hashtags**: Add and search for hashtags. Each hashtag has its own dedicated page.
- **Post Page**: Every post has a dedicated page for detailed view and interaction.
- **Bookmarked Posts Page**: Access all your bookmarked posts in one place.
- **User Profile Page**: Customize your profile with an avatar, display name, and bio.
- **Notifications**: Real-time notifications for likes, follows, and comments with read/unread status and live updates.
- **Live Messaging**: Chat with other users in real-time and create groups.
- **Message Reactions & File Sharing**: React to messages and share files in conversations.
- **Unread Message Count**: Track unread messages and notifications.

## Technologies Used

- **Frontend**:

  - [Next.js 15 RC](https://nextjs.org/) for server-side rendering and static site generation.
  - [React Query](https://react-query.tanstack.com/) for data fetching and caching.
  - [React Hook Form](https://react-hook-form.com/) for form handling.
  - [React Image Resizer](https://www.npmjs.com/package/react-image-resizer) for image resizing.
  - [React Linkify](https://www.npmjs.com/package/react-linkify) for hyperlinking text.
  - [Tailwind CSS](https://tailwindcss.com/) for styling.
  - [ShadCN](https://github.com/shadcn) for component library.

- **Backend**:

  - [Prisma](https://www.prisma.io/) ORM for database interactions.
  - [PostgreSQL](https://www.postgresql.org/) for relational database management.
  - [Lucia Auth](https://github.com/lucia-auth/lucia) for authentication.
  - [Google OAuth](https://developers.google.com/identity/protocols/oauth2) for third-party login integration.
  - [UploadThing](https://www.uploadthing.com/) for file storage.

- **Chat**:

  - [Stream Chat](https://getstream.io/chat/) for real-time messaging and chat functionalities.

- **Post Editor**:
  - [Tiptap](https://tiptap.dev/) for rich-text editing.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/dharayush7/socialad
   cd socialad
   ```

2. **Install dependencies**:
   Note: install all dependencies with npm.
   ```bash
   npm install --legacy-peer-deps
   ```

At first open free account in Uploadthing and Stream.

3. **Google Oauth App:** Add a Oauth app in Google api and services and add following configuration -

**OAuth consent screen**

Select external

**App information**

App Name = give_a_name
User support email = choose_a_email

**Developer contact information**

Email address = provide_a_email_address

**Your non-sensitive scopes:**
Add followings
`./auth/userinfo.email`, `./auth/userinfo.profile`

**Keep other thing default and save the app.**

**Now publish the app**

**Navigate the credetials Menu**

**Create credetials:** OAuth Client Id

**Application type:** Web Application

**Name:** give_a_name

**Authorized redirect URIs:** Add the urls `http://localhost:3000/api/auth/callback/google`

**Create.**

**Save the Client Id and Seceret**

4. **Set up environment variables**:
   Create a `.env` file in the root directory and configure the following environment variables:

   ```env
   # Postgres
   DATABASE_URL=your_postgres_database_url

   # Uploadthing
   UPLOADTHING_SECRET=your_uploadthing_secret
   NEXT_PUBLIC_UPLOADTHING_APP_ID=your_uploadthing_app_id

   # Cron Job
   CRON_SECRET=give_a_random_key

   #Stream
   NEXT_PUBLIC_STREAM_KEY=your_stream_api_key
   STREAM_SECRET=your_stream_api_secret

   #Google Auth
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret

   #other
   NEXT_PUBLIC_BASE_URL="http://localhost:3000"

   ```

5. **Run database migrations**:

   ```bash
   npx prisma db push
   ```

6. **Start the development server**:
   ```bash
   npm run dev
   ```

## 🔗 Links

[portfolio](https://www.ayushdhar.com/)

## Cron job:

For cleening the uploadthing storage there have a route
`http://localhost:3000/api/clear-uploads`.

In production it autometically maintain by vercel.

But in development, call this endpoint with GET request using postman or thunderclient and in authorization select bearer and provide CRON_SECRET (which is write in .env file) as value.

## License

[MIT]
