import React from 'react';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand ml-4" href="#">
      <div className="logo-holder">
       <span className="logo-text-mobile"id='logo-text'>Quilt</span>
       <div id="darkblue" className="row logo-row"></div>
       <div id="blue" className="row logo-row"></div>
       <div id="lightblue" className="row logo-row"></div>
       <div id="purple" className="row logo-row"></div>
       <div id="lightred" className="row logo-row"></div>
       <div id="red" className="row logo-row"></div>
       <div id="darkred" className="row logo-row"></div>
      </div>
    </a>
    <div className="collapse navbar-collapse  mt-3.5 my-lg-0 justify-content-end" >
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Account
          <span className="caret"></span></a>
          <ul className="dropdown-menu">
          <li><form>
           <div className="form-group">
             <input type="email" id="form-item"className="form-control"  aria-describedby="emailHelp" placeholder="Email or Username" />
             <input type="password"  id="form-item" className="form-control"  aria-describedby="emailHelp" placeholder="Password" />
            </div>
          </form></li>
          <li className="form-btns">
            <btn className="form-btn btn btn-primary">
              Login
            </btn>
            <btn className="form-btn btn btn-success">
              Sign Up
            </btn>
          </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle saved-caret" data-toggle="dropdown" href="#">Saved Articles
          </a>
          <ul className="dropdown-menu">
            <li><span id="saved-article-note">Please login to view your saved articles</span></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./index-how.html">How Does It Work?</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
