import React from 'react'

const Nav = () => {
  return (
    <div>
        <img 
            alt='logo'
            src='logo192.png'
        />
        <ul>
            <li><a href='/home'>Home</a></li>
            <li><a href='/orders'>Orders</a></li>
            <li><a href='/menu'>Menu</a></li>
        </ul>
    </div>
  )
}

export default Nav