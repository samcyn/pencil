import React from 'react';
import PropTypes from 'prop-types'; // ES6

import Input from './components/Input';
import ButtonForm from './components/ButtonForm';
import Header from './components/Header';
import Aside from './components/Aside';



//stateless functional components
const UserAdminPage = (props) => {
  return (
    <div className="container container--wrapper">
      <Header/>

      <main>
      
        <Aside storyHeadline = "Recent Stories"/>
    
        <section className="stories">
          <div className="stories__head">
            <h3 className="stories__title">Dashboard</h3>
            <div className="stories__stats">
              <span className="stories__date">Last Updated: 6 months ago </span>
              <span className="stories__location">Nigeria</span>
              <span className="stories__views">1117 views</span>

            </div>
          </div>
          <div className="stories__body">
            <form className="form">
              <fieldset className="form__fieldset">
                <Input type="text" name ="full-name" placeholder="Full Name" defaultValue="Samson Iyanda"/>
                <Input type="email" name ="email" placeholder="Email Address" defaultValue="samsoniyanda@outlook.com"/>                
              </fieldset>
              <fieldset className="form__fieldset">
                <Input type="text" name ="full-name" placeholder="Full Name" defaultValue="Samson Iyanda"/>
                <Input type="email" name ="email" placeholder="Email Address" defaultValue="samsoniyanda@outlook.com"/>                
              </fieldset>
              <fieldset className="form__fieldset">
                <Input type="text" name ="full-name" placeholder="Full Name" defaultValue="Samson Iyanda"/>
                <Input type="email" name ="email" placeholder="Email Address" defaultValue="samsoniyanda@outlook.com"/>                
              </fieldset>
              <fieldset className="form__fieldset">
                <Input type="text" name ="full-name" placeholder="Full Name" defaultValue="Samson Iyanda"/>
                <Input type="email" name ="email" placeholder="Email Address" defaultValue="samsoniyanda@outlook.com"/>                
              </fieldset>
            </form>
          </div>
        </section>
    </main>
    </div>
  );
}

UserAdminPage.propTypes = {
  username: PropTypes.string.isRequired
}

export default UserAdminPage;
