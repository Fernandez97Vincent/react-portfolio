import React from 'react';

import './style.css'

function Header() {
    return (
        <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="/react-portfolio/">Welcome</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/react-portfolio/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/react-portfolio/about">About Me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/react-portfolio/projects">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/react-portfolio/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        
    )
}

export default Header;

// import React from "react";
// import { Nav, NavLink, NavMenu } 
//     from "./NavbarElements";
  
// const Navbar = () => {
//   return (
//     <>
//       <Nav>
//         <NavMenu>
//           <NavLink to="/about" activeStyle>
//             About
//           </NavLink>
//           <NavLink to="/contact" activeStyle>
//             Contact Us
//           </NavLink>
//           <NavLink to="/blogs" activeStyle>
//             Blogs
//           </NavLink>
//           <NavLink to="/sign-up" activeStyle>
//             Sign Up
//           </NavLink>
//         </NavMenu>
//       </Nav>
//     </>
//   );
// };
  
// export default Navbar;