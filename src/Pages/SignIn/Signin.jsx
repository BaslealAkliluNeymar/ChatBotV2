import { SignIn } from '@clerk/clerk-react'
import React from 'react'
import './signin.css'
const Signin = () => {
  return (
    <div className='sign-in'>
      <SignIn 
        path="/sign-in" 
        signUpUrl='/sign-up'
        forceRedirectUrl='/dashboard'/>
    </div>
  )
}

export default Signin