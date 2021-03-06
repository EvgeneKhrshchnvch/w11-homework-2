import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head' 

const Dashboard = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Dashboard</div>
          <div><Link to="/dashboard/profile/385666b1-bff5-11e9-95ba-1bf845c18f8d">Go To Profile</Link></div>
          <div><Link to="/dashboard/main">Go To Main</Link></div>
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {} 

export default Dashboard