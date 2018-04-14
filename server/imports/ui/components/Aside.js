import React from 'react';
import PropTypes from 'prop-types'; // ES6



//stateless functional components

export default class Aside extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      sticky: false
    }
    
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    var elementPosition = document.getElementsByTagName("main")[0].offsetTop;
    window.addEventListener('scroll', function (e) {
      if(window.innerWidth <= 762){
        return;
      }
      var top = window.pageYOffset || document.documentElement.scrollTop;
      if (top > elementPosition - 60) {
        console.log(top > elementPosition);
        this.setState({
          sticky: true
        });
        // sidebar.classList.add('user--sticky');
      } else {
        // sidebar.classList.remove('user--sticky');
        this.setState({
          sticky: false
        });
      }
    }.bind(this));
  }

  render() {
    return (
      <aside className={"user user--leftaside " + (this.state.sticky ? "user--sticky" : "")}>
        <div className="user__accounts">
          <div className="user__avatar">
            <img src="img/icons/avatar.png" width="100px" alt="user-image" />
          </div>
          <div className="user__bio">
            <p>I'm witty as ever</p>
            <div className="user__icons">
              <a href="#" target="_blank">
                <span className="icons__facebook">f</span>
              </a>
              <a href="#" target="_blank">
                <span className="icons__facebook">in</span>
              </a>
              <a href="#" target="_blank">
                <span className="icons__twitter">t</span>
              </a>
            </div>
          </div>
        </div>
        <div className="related-stories">
          <ul className="related-stories__list">
            <li className="related-stories__item">
              <h5 href="#" className="related-stories__links">Related Stories</h5>
            </li>
            <li className="related-stories__item">
              <a href="#" className="related-stories__links">
                <p className="mt-0">
                  Should A Bot Have to Tell You It’s a Bot?
                </p>
                <small>Collins</small>
              </a>
            </li>
            <li className="related-stories__item">
              <a href="#" className="related-stories__links">
                <p className="mt-0">
                  Should A Bot Have to Tell You It’s a Bot?
                </p>
                <small>Collins</small>
              </a>
            </li>
            <li className="related-stories__item">
              <a href="#" className="related-stories__links">
                <p className="mt-0">
                  Should A Bot Have to Tell You It’s a Bot?
                </p>
                <small>Collins</small>
              </a>
            </li>
  
          </ul>
        </div>
      </aside>
    );
  }
}

Aside.propTypes = {
  // title: PropTypes.string.isRequired
}


