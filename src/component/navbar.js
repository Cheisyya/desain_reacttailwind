import React from "react";
import { Link } from "react-router-dom";


export default class Navbar extends React.Component {
  render() {
    return (
        <div className="bg-gradient-to-br from-teal-500 via-cyan-500 to-sky-500">
        <div className="flex flex-col lg:flex-row font-style: normal"> 
          <div className="flex items-center justify-between px-4 py-4 lg:py-0 border-b border-sky-300 lg:border-b-0">
            <div>
              <img src="https://img.icons8.com/ios-glyphs/30/ffffff/camping-tent.png" />
            </div>
            <div>
              <a href="#" className="uppercase font-semibold text-white">Hisy</a>
            </div>
            <div>
              <button className="focus:outline-none text-white lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between w-full py-4 lg:py-0">
            <div className="flex flex-col lg:flex-row">
              <Link className="block px-4 py-2 lg:py-5 text-white" to="/">Home</Link>
              <Link className="block px-4 py-2 lg:py-5 text-white" to="/about">About</Link>
              <Link className="block px-4 py-2 lg:py-5 text-white" to="/contact">Contact</Link>
            </div>
            <div className="flex flex-col lg:flex-row">
              <a href="#" className="block px-4 py-2 lg:py-5 text-white ">Sign in</a>
              <a href="#" className="block px-4 py-2 lg:py-5 text-white">Sign up</a>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}