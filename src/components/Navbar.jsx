import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <div className="logo">
                <img src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo-2000-2014.jpg" alt="Netflix Logo" />
            </div>
            <div className="menu">
                <a href="">Home</a>
                <a href="">TV Shows</a>
                <a href="">Movies</a>
                <a href="">New & Populer</a>
                <a href="">My List</a>
            </div>
            <div className="profile">
                <img src="https://tse3.mm.bing.net/th?id=OIP.gAoBZTchuV06h2zGCGTsPgAAAA&pid=Api&P=0&h=220" alt="Profile" />
            </div>
        </div>
    </div>
  )
}

export default Navbar