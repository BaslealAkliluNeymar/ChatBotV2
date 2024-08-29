import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './RootLayout.css'
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
const Rootlayout = () => {
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

  if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
  }

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <div className='rootlayout'>
          <header>
            <Link to="/" className='logo'>
              <img src="../public/logo.png" alt="" />
              <h1>LAMA AI</h1>
            </Link>

            <div>
                <header>
                  <SignedOut>
                    <SignInButton />
                  </SignedOut>
                  <SignedIn>
                      <UserButton />
                    </SignedIn>
                </header>
            </div>
          </header>
          <main>
              <Outlet />
          </main>
      </div>
    </ClerkProvider >
  )
}

export default Rootlayout