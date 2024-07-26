import React from 'react'

const Navbar = () => {
  return (
        <div className="navbar">
            <div className="nav-item">
                <p>Dashboard</p>
            </div>
            <div className="nav-item">
                <p><a href='localhost:5000' target="_blank">Chatbot</a></p>
            </div>
        </div>
    );

}

export default Navbar