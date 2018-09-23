import React from 'react'

const Navbar = (props) => {
  return (
    <nav className="navbar" style={{backgroundColor:'#2D2C2A'}}>
      <div className="container" style={{color: '#FFAF25'}}>
        <a href="/" className="navbar-brand" style={{color: '#FFAF25'}}>{props.name}</a>
      </div>
    </nav>
  )
}

export default Navbar