import React from 'react'
import './chatlist.css'
import { Link } from 'react-router-dom'
const Chatlist = () => {
  return (
    <div className='chatlist'>
        <span className="title">DASHBOARD</span>
        <Link to="/dashboard">Create a new Chat</Link>
        <Link to='/'>Explore Lama AI</Link>
        <Link to=''>Contact</Link>

        <hr />

        <div className="list">
            <Link to="/">My Chat Title</Link>
            <Link to="/">My Chat Title</Link>
            <Link to="/">My Chat Title</Link>
            <Link to="/">My Chat Title</Link>
            <Link to="/">My Chat Title</Link>
            <Link to="/">My Chat Title</Link>
            <Link to="/">My Chat Title</Link>
        </div>


        <hr />


        <div className="upgrade">
            <img src="" alt="" />
            <div className="texts">
                <span>Upgrade to Lama AI Pro</span>
                <span>Get unlimited acces to all features</span>
            </div>
        </div>
    </div>
  )
}

export default Chatlist