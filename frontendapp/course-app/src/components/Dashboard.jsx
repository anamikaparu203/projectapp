import React from 'react'

const Dashboard = () => {
    const user=sessionStorage.getItem("username");
  return (

    
    <div>Welcome to mern{user}!</div>
    
  )
}

export default Dashboard