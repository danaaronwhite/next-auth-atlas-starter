import Link from 'next/link'

export default function Home() {

  return (
    <div className="container">
      <div className="hero min-h-screen">
        <div className="hero-content text-center shadow-lg p-10 rounded">
          <div className="max-w-[800px]">
            <h1 className="text-5xl font-bold">Next Auth Atlas Starter</h1>
            <p className="py-6">A lightweight starter template for modern, server side rendered web applications using the following modern technologies:</p>
            <ul className="list-disc text-left">
              <li>
                <a href="https://nextjs.org/" target="_blank">
                  Next.js (The world's best SSR framework based on React)
                </a>
              </li>
              <li>
                <a href="https://next-auth.js.org/" target="_blank">
                  Next-Auth (An awesome auth framework for Next.js)
                </a>
              </li>
              <li> 
                <a href="https://www.mongodb.com/atlas/database" target="_blank">
                  MongoDB Atlas (A multi-cloud database as a service platform)
                </a>
              </li>
              <li> 
                <a href="https://tailwindcss.com/" target="_blank">
                  Tailwind CSS (A light weight, modern CSS framework)
                </a>
              </li>
              <li> 
                <a href="https://daisyui.com/" target="_blank">
                  Daisy UI (An awesome UI library built for Tailwind.css)
                </a>
              </li>
            </ul>
            <div className="text-left mt-6">
              <h2 className="font-bold text-3xl mb-4">Why use this template?</h2>
              <p className="mb-4">You're a seasoned React or Next.js developer looking for a quick starter template, engineered with best practices and ready to create a web based application that can scale with an awesome modern tech stack. This template is a barebones template that takes the "pain in the ass" away from starting a Next.JS web app. We've configured the bones to include a backend mongo db install with auth routes already set up. Just install and start building in minutes.</p>
              <div className="flex">
                <div className="flex-[0_0_50%] pr-3">
                  <Link href="/auth/signin" className="btn btn-primary w-full">Check out the sign up / sign in pages.</Link>
                </div>
                <div className="flex-[0_0_50%] pl-3">
                  <Link href="/app" className="btn btn-secondary w-full">Check out a guarded route.</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
