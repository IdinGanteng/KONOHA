import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><a href='/'>KONOHA</a></li>
                <li><a href='/hokage'>HOKAGE</a></li>
                <li><a href='/'>SUMBER DAYA</a></li>
                <div className="dropdown">
                <button className="dropbtn">Golek Liyone
                <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href="/">about</a>
                    <a href="/">contact</a>
                    <a href="/">log out</a>
                </div>
            </div> 
            </ul>
        </nav>
    </div>
  )
}

export default Navbar