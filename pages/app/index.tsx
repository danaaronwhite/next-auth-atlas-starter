import { signOut } from 'next-auth/react'
import AuthRoute from '@/hocs/authRoute'

export default function AppIndex() {
  return (
    <AuthRoute>
      <div className="text-center p-5">
        <h1 className="font-bold text-4xl mb-5">This is a guarded route.</h1>
        <p className="mb-6">Simply wrap your guarded pages in the AuthRoute component.</p>
        <button 
          className="btn btn-primary"
          onClick={() => signOut()}
        >Sign out</button>
      </div>
    </AuthRoute>
  )
}