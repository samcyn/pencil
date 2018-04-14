import React from 'react';
import PropTypes from 'prop-types'; // ES6

import Input from './components/Input';
import ButtonForm from './components/ButtonForm';

import Header from './components/Header';



//stateless functional components
const SignupPage = (props) => {
  return (
    <div className="container container--wrapper">
      <Header/>

      <main>
        <section className="accounts">
          <div className="accounts__wrap">
            <form>
              <Input type="text" name="username" placeholder="Username" />
              <Input type="email" name="email" placeholder="Email" />
              <Input type="password" name="password" placeholder="Password" />
              
              <ButtonForm text="Sign Up" type = "submit" modifier = "button--outline"/>
            </form>
            <div className="accounts__options">
              <a href="signup.html">Sign Up</a>
              <a href="#">Forgot Password</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

SignupPage.propTypes = {
  // title: PropTypes.string.isRequired
}

export default SignupPage;
