
# next-auth-atlas-starter

A super lightweight, minimal web application starter kit utilizing Next.js, Next-auth, prisma and Mongo DB Atlas with a Tailwind.css and Daisy UI frontend.

## Getting Started

 1. Add your SITE_URL to the .env file. The local development server address is already set as http://localhost:3000 (the default next js setup). Once you deploy, this variable should be changed to your live URL.
 2. In a terminal window, run the command: `$npm install`
 3. Follow the rest of the guide below to get set up with Prisma and Next-Auth.

## Next.js
This project uses Next JS as a great base for server side rendered content as well as a base for dynamic web application development. You can read more about next.js here: https://nextjs.org/docs

## Prisma
This project uses the powerful combination of Prisma ORM (https://www.prisma.io/nextjs) and Mongo DB Atlas as a database solution for quick prototyping and scalable production applications.

## Mongo DB Atlas
Prisma is compatible with a wide range of database solutions. For this starter kit, we're utilizing Mongo DB Atlas for its robust security and ease of use which allows quick prototyping of new apps without worrying about scaling later as Atlas is set up for apps that run at scale. Follow the steps below to get set up with a free Mongo DB Atlas deployment and Prisma in your application.

 1. Visit https://cloud.mongodb.com/
 2. Sign up or register for a Mongo DB Cloud account.
 3. Once signed in, click the "Create Cluster" button.
 4. You can choose dedicated here if you'd like a paid account with additional options and features, but for a free account for test development, you can simply choose the "Shared" option.![Mongo DB Atlas: Create Cluster](https://i.imgur.com/EcH2sTE.png)
 5. Choose a cloud provider and region. We recommend AWS, but you can choose whichever you like.
 6. Once your cluster is created, click "connect" and copy your connection string.![Mongo DB Atlas: Connect](https://i.imgur.com/dDVbei9.png)
 7. Before copying your connection string, you will need to set up IP access. For our installation we chose "Access from anywhere", but you can read more about securing your cluster here: https://www.mongodb.com/docs/atlas/setup-cluster-security/
 8. Add a mongo db user and password to connect to your database, then click "Choose a connection method".
 9. Choose driver as the connection option and Node.js for the driver. **note that we are only interested in the connection string here, so you can disregard the other instructions.* 
 10. Now copy your connection string.
 11. Paste your connection string into the "DATABASE_URL" environment variable in /.env. Note that you will need to replace your password and it is crucial that you add your database name immediately after the slash and before the query string, usually "Cluster0". Your connection string should resemble the following: **mongodb+srv://[dbUser]:[dbUserPassword]@[cluster0.zjbttog.mongodb.net]/[dbName]?retryWrites=true&w=majority** 
 12. Add .env to your gitignore file.

## Next Auth Email Link Setup
Next Auth has a wide variety of "providers" that you can configure for authentication and authorization. In this project we have opted for a "magic link" style email authentication. In order to set up email authentication, follow the guide below. More configurations for Next Auth providers can be found here: https://next-auth.js.org/providers/

 1. In order to use magic link email signup, you'll need to add a mail server in the .env file. We recommend send in blue (https://app.sendinblue.com/) as it's quick, easy and free to setup. Once you've registered with send in blue and added a verified sender, head over to your smtp & api tab and copy your smtp server url into the .env file along with the sender email you setup. Your variables will have the following format: EMAIL_SERVER=smtp://[username]:[password]@[smtp.example.com]:[587]  
EMAIL_FROM=noreply@example.com
2. Once you've set up your .env file with your database_url, email_server and email_from variables, you're ready to push your prisma db. You can learn more about the available prisma commands here: https://www.prisma.io/docs/reference/api-reference/command-reference
3. Run the following command in your terminal to push your prisma db: `$npx prisma db push`

## You're ready to finalize your install and get started with development.

1. Run the following command in your terminal to run the local development environment: `$npm run dev`
2. When you're ready to build, we've included the awesome next sitemap plugin which will run as a postbuild command when you build your site with the command: `npm run build`

## Styling and Frontend Notes

 - **Tailwind CSS integration.** Tailwind is an awesome library with a bit of a learning curve. If you've never used tailwind, you'll be amazed at the lack of custom css your project will need. It takes a bit of getting used to, but give it a whirl by simply looking up the styles you'd typically use in the documentation. After a few days of development you'll love it or hate it. The good news is that it can easily be gutted and replaced with Bootstrap, Material UI or a framework of your choice as we've only included a few pages to get you going (a homepage not requiring authentication, signup/login pages and a guarded route requiring authentication to use as an example). If you'd like to check out tailwind, you can do so here: https://tailwindcss.com/
	 - **Theming and Variables.** You can customize your brand colors and theming in the 'tailwind.config.js' file. There is a global .css file using css variables at '/styles/globals.css' where you can place any non tailwind, global css that you need.
 - **Daisy UI.** Tailwind is a pretty lightweight library and many (including us) feel like it does not have enough of a solid base to quickly prototype apps. So we've included the awesome Daisy UI framework, which is a super lightweight Tailwind CSS UI Library. You can check out all the available Daisy UI components here: https://daisyui.com/
 - **Customizing the Frontend.** There is a...
	 - **Signin page** at 'pages/auth/signin.tsx' that can be customized however you wish. We've provided a base signin / signup page. Next-Auth's email signup system works by creating a user if one does not exist, or signing the user in if the email does exist. Therefore our standard practice is to set up a query string like, "?newUser=true" and check with a useEffect hook when the page loads if the user is new by checking the query string variable. This allows you to customize your header and helper text to new users vs. existing users logging in.
	 - **Verify email page** at '/pages/auth/verify-request.tsx'. The user is redirected here after inputting an email on the signin/signup page.
	 - **Homepage** at '/pages/index.tsx'. This page is an unguarded homepage, but you could simply wrap the page in <AuthRoute> if you'd like to guard this route. Any page wrapped in <AuthRoute> would require a user to be logged in to access the page.
	 - **App/Index** at '/pages/app/index.tsx'. This page is a sample guarded route. The only special thing about this page is that it is wrapped in <AuthRoute> in order to require an authenticated user to access the page.
