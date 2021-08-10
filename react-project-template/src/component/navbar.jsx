import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import React from 'react'

const Navbar = () => {

  return ( <>
    
     {/* <style>
           main>.container {
               padding: 60px 15px 0;
               margin-bottom: 5rem;
           }
           .sticky-nav {
               position: fixed;
               left: 0;
               bottom: 0;
               width: 100 % ;
           }
       </style> */}
    
    <body className="d-flex flex-column h-100">
    
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
            <div className="navbar-brand">Fixed navbar</div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/app">App</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/code">Code</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="gitRepo">Git Repo</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="about">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
    </body>
    
  </> );
}
 
export default Navbar;
