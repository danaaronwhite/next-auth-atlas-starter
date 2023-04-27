import { useState } from 'react'
import type { GetServerSidePropsContext } from 'next'
import { getCsrfToken } from 'next-auth/react'

export default function SignIn({ csrfToken }: any) {
  const [email, setEmail] = useState('')

  const submitHandler = (e: any) => {
    e.preventDefault()
    // @ts-ignore
    document.getElementById('form').submit()
  }

  return (
    <div className="p-6 md:p-20 min-h-[100vh]">
      <div className="max-w-md">
        <h1 className="text-4xl font-bold">Login / Create Account.</h1>
        <p className="mb-10">Enter your email and we will send you an authentication link to sign in.</p>
        <form method="post" id="form" action="/api/auth/signin/email">
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <div className="form-control mb-8">
            <label className="text-sm font-semibold text-slate mb-2">Email address</label>
            <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Email address..." 
                  className="p-4 border border-medium-gray w-full font-normal rounded" 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
          </div>
          <div className="form-control mb-12">
            <button
              className="btn btn-primary text-white text-regular w-100 text-center"
              onClick={(e) => submitHandler(e)}
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // Get the CSRF Token for NextAuth
  const csrfToken = await getCsrfToken(context)

  return {
    props: { csrfToken },
  }
}