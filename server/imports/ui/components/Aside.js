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
    this.handleSidebarClone = this.handleSidebarClone.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleSidebarClone();
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

  handleSidebarClone(){
    var navbar_initialized = false;

    lbd = {
      misc: {
        navbar_menu_visible: 0
      },
      initRightMenu() {
        if (!navbar_initialized) {
          var $html = document.getElementsByTagName('html')[0];
          var $bodyClick = document.createElement('DIV');
          $bodyClick.id = 'bodyClick';
          //get the left sidebar ready
          var $sidebar = document.getElementsByClassName('user--leftaside')[0].cloneNode(true);

          //define an empty list to add items..
          var ul_content = $sidebar.innerHTML;

          var $aside = document.createElement("ASIDE");
          $aside.className = 'user user--rightaside';
          $aside.innerHTML = ul_content;


          document.getElementsByTagName('body')[0].appendChild($aside);



          var $toggle = document.getElementById('navbar-toggler');

          $toggle.addEventListener('click', togglerHandler);

          function togglerHandler(e) {
            if (lbd.misc.navbar_menu_visible == 1) {
              $html.classList.remove('nav-open');
              lbd.misc.navbar_menu_visible = 0;
              $bodyClick.remove();
              setTimeout(function () {
                e.target.classList.remove('toggled');
              }, 400);

            } else {
              setTimeout(function () {
                e.target.classList.add('toggled');
              }, 430);


              document.getElementsByTagName('body')[0].appendChild($bodyClick);

              $bodyClick.addEventListener('click', function (e) {
                $html.classList.remove('nav-open');
                lbd.misc.navbar_menu_visible = 0;
                this.remove();
                setTimeout(function () {
                  $toggle.classList.remove('toggled');
                }, 400);
              });

              $html.classList.add('nav-open');
              lbd.misc.navbar_menu_visible = 1;
            }
          }
          navbar_initialized = true;
        }
      }
    }
    if (window.innerWidth <= 762) {
      lbd.initRightMenu();
    }
    window.addEventListener('resize', function () {
      if (window.innerWidth <= 762) {
        lbd.initRightMenu();
      }
    });
  }

  render() {
    return (
      <aside className={"user user--leftaside " + (this.state.sticky ? "user--sticky" : "")}>
        <div className="user__accounts">
          <div className="user__avatar">
            <img src="/img/icons/avatar.png" width="100px" alt="user-image" />
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
              <h5 href="#" className="related-stories__links">{ this.props.storyHeadline }</h5>
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
  storyHeadline: PropTypes.string.isRequired
  // title: PropTypes.string.isRequired
}


