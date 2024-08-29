import { useAuth } from '@clerk/clerk-react'
import React, { useEffect } from 'react'
import { Outlet, useNavigate, useNavigation } from 'react-router-dom'
import Chatlist from '../../components/Chatlist'

const DashboardLayout = () => {

  const {userid, isLoaded} = useAuth()
  const navigate = useNavigate()

  useEffect(() =>{
    if(isLoaded && !userid){
      navigate('/sign-in')
    }

  },[isLoaded,userid,navigate])

  // if(!isLoaded) return 'Loading'
  return (
    <div>
        <div>
          <Chatlist />
        </div>
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default DashboardLayout