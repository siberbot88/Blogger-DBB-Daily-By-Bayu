import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'

const Dashboard = () => {

    const [dashboardData, setDashboardData] = useState({
      blogs: 0,
      comments: 0,
      draft:0,
      recentBlogs: []
    })

    const fetchDashboard = async () => {
      setDashboardData(dashboardData)
    }

    useEffect(()=> {
      fetchDashboard()
    },[])

  return (
    <div className='flex-1 p-4 md:p-10 bg-blue-50/50'>
      
      <div className='flex flex-wrap gap-4'>
        <div>
          <img src={assets.dashboard_icon_1} alt="" />
          <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded-shadow cursor-pointer hover-scale-105 transition-all'>
            <p className='text-xl font-semibold test-gray-600'>{dashboardData.blogs}</p>
            <p className='text-gray-400 font-light'>Blogs</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard
