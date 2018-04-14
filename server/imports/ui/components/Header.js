import React from 'react';
import PropTypes from 'prop-types'; // ES6



//stateless functional components
const Header = (props) => {
  return (
    <header>
      <div className="brand">
        <div className="brand__wrap">
          <h3 className="brand__logo">
            <a href="#"> PENCIL</a>
          </h3>
        </div>
        <div className="brand__toggler" id="navbar-toggler">
          <button className="brand__button">&#x02261;</button>
        </div>
        <div className="brand__auth">
          <span>
            <a href="login.html">LogIn</a> /
            <a href="signup.html">Sign Up</a>
          </span>
          <span>
            <span className="brand__auth-email">samsoniyanda@outlook.com</span>
            <span className="brand__auth-divider">||</span>
            <a href="#">Logout</a>
          </span>
        </div>
      </div>
      <nav className="navbar ">
        <div className="navbar__collapse">
          <ul className="navbar__list">
            <li className="nav__item nav__item--active">
              <a className="nav__link" href="index.html">Home</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="profile.html">Profile</a>
            </li>
          </ul>
        </div>
      </nav>

    </header>
  );
}

Header.propTypes = {
  // title: PropTypes.string.isRequired
}

export default Header;
