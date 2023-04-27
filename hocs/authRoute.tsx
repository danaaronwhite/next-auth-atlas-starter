import { useEffect, PropsWithChildren } from 'react'
import { signIn, useSession } from 'next-auth/react'

export default function AuthRoute(props: PropsWithChildren) {

  const { data: session, status } = useSession()

  useEffect(() => {
    if(status !== 'loading' && !session) {
      signIn()
    }
  }, [status])


  return (
    <>
      {status === 'loading' ? (
        <>Loading...</>
      ) : (
        <>
          {props.children}
        </>
      )}
    </>
  )
}
