{/* import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username 👋</span></h1>
        <button onClick={logOutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header */}

import React, { useEffect, useState } from 'react'

const Header = (props) => {
  const [username, setUsername] = useState('')

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('loggedInUser'))
    if (userData && userData.firstName) {
      setUsername(userData.firstName)
    } else if (userData && userData.email === "admin@example.com") {
      setUsername("Admin")
    } else {
      setUsername("User")
    }
  }, [])

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{username} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'
      >
        Log Out
      </button>
    </div>
  )
}

export default Header
