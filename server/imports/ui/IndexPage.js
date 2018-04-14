import React from 'react';
import PropTypes from 'prop-types'; // ES6

import Header from './components/Header';
import Aside from './components/Aside';



//stateless functional components
const IndexPage = (props) => {
  return (
    <div className="container container--wrapper">
      <Header/>

      <main>
        <Aside storyHeadline="Related Stories"/>
        
        <section className="stories">
          <div className="stories__head">
            <h3 className="stories__title">LOrem Ipsum</h3>
            <div className="stories__stats">
              <span className="stories__date">2 hours ago, </span>
              <span className="stories__location">Nigeria</span>
              <span className="stories__views">1117 views</span>

            </div>
          </div>
          <div className="stories__body">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Rem consequuntur sint quo, amet commodi maxime aperiam rerum maiores
            possimus dicta corporis, vel inventore. Voluptatibus aspernatur consequuntur modi iure iusto atque.

          </div>
        </section>
      </main>
    </div>
  );
}

IndexPage.propTypes = {
  // title: PropTypes.string.isRequired
}

export default IndexPage;
