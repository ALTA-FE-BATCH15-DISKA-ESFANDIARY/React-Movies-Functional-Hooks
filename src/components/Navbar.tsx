import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-black shadow p-4 top-0 w-full">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Warner_Bros._logo_2023.svg/800px-Warner_Bros._logo_2023.svg.png"
            alt="Warner Bros. Logo"
            className="h-16 w-auto"
          />
        <ul className="flex justify-center space-x-6">
          <li>
            <a href="/" className="text-white font-bold hover:text-cyan-400">Home</a>
          </li>
          <li>
            <a href="/Detail" className="text-white font-bold hover:text-cyan-400">Detail</a>
          </li>
          <li>
            <a href="/favorites" className="text-white font-bold hover:text-cyan-400">Favorite Movies</a>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar