import { SignUp } from '@clerk/clerk-react'
import React from 'react'
import './signup.css'
const Signup = () => {
  return (
    <div className='signup'>
      <SignUp path="/sign-up" signInUrl='/sign-in'
      />
    </div>
  )
}

export default Signup