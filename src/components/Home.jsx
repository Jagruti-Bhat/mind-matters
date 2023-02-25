import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div className="flex justify-center items-center">
        <p className="text-4xl text-red lg:text-6xl">hello world</p>
        <div className="bg-red-400 h-40 w-32 rounded-md">
            <Link to="/apple">Click me</Link>
        </div>
    </div>
  )
}

export default Home