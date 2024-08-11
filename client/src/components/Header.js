import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav class="main-nav">
        <Link to="/" className="main-nav-logo">
          <img
            class="main-nav-logo-image"
            src="./assets/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 class="sr-only">Argent Bank</h1>
          </Link>
        <div>
          <Link to="/sign-in" class="main-nav-item">
            <i class="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
