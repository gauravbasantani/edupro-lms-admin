import React from 'react'

const Dashboard = () => {
  let name = localStorage.getItem('name');
  return (
    <div>
      <h1 className='mt-2'>Welcome to Dashboard {name}</h1>
    </div>
  )
}

export default Dashboard
