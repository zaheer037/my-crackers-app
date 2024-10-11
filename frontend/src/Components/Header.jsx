import React from 'react';
import './header.css';

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light navbg navfont py-3">
    <div class="container-fluid">
        <button type="button" class="navbar-toggler mx-auto" data-toggle="collapse" data-target="#myNavbar">
            <span class="fa fa-bars text-dark"> Menu </span>
        </button>
        <div id="myNavbar" class="collapse navbar-collapse">
            <ul class="navbar-nav mx-auto text-center navfont py-lg-0 py-4">
                <li class="nav-item px-3 active">
                    <a class="nav-link" href="/products">Quick Purchase</a>
                </li>
                <li class="nav-item px-3">
                    <a class="nav-link" href="/about-us">About</a>
                </li>
                <li class="nav-item px-3">
                    <a class="nav-link" href="/safety-tips">Safety Tips</a>
                </li>
                <li class="nav-item px-3">
                    <a class="nav-link" href="/contact">Contact</a>
                </li>
            </ul>
        </div> 
    </div>		
</nav>
  );
}

export default Header;
