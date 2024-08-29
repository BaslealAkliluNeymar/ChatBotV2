import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import Home from './Pages/Homepage/Home.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import Chatpage from './Pages/Chatpage/Chatpage.jsx';
import Rootlayout from './Layouts/RootLayout/Rootlayout.jsx';
import DashboardLayout from './Layouts/DashboardLayout/DashboardLayout.jsx'
import Signin from './Pages/SignIn/Signin.jsx'
import Signup from  './Pages/SignUp/Signup.jsx'


const router = createBrowserRouter([
  {
   element:<Rootlayout />,
   children:[
    {
      path:'/',
      element:<Home />
    },
    {
      path:'/sign-in/*',
      element:<Signin />
    },
    {
      path:'/sign-up/*',
      element:<Signup />
    },
    {
      element:<DashboardLayout />,
      children:[
      {
        path:'/dashboard',
        element:<Dashboard />
      },
      {
        path:'/dashboard/chats/:id',
        element:<Chatpage />
      }
    ] 
    }
  ]}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
