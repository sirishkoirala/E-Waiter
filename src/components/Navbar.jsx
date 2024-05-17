import React from "react";
import "./Navbar.css";

const Navbar = () => {
   return (
      <nav className="navbar">
         <a href="#" className="logo">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="35"
               height="35"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
               className="icon icon-tabler icons-tabler-outline icon-tabler-align-justified"
            >
               <path stroke="none" d="M0 0h24v24H0z" fill="none" />
               <path d="M4 6l16 0" />
               <path d="M4 12l16 0" />
               <path d="M4 18l12 0" />
            </svg>
         </a>
         <div className="search-components">
            <input className="search-Box" type="text" placeholder="Search Menus..." />
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="30"
               height="30"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
               className="searchbtn icon icon-tabler icons-tabler-outline icon-tabler-search"
            >
               <path stroke="none" d="M0 0h24v24H0z" fill="none" />
               <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
               <path d="M21 21l-6 -6" />
            </svg>
         </div>
      </nav>
   );
};

export default Navbar;
