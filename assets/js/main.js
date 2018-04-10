var app = {
  fixedSidebar: function () {
    var elementPosition = document.getElementsByTagName("main")[0].offsetTop;
    var sidebar = document.getElementsByClassName('user--leftaside')[0];

    window.addEventListener('scroll', function (e) {
      var top = window.pageYOffset || document.documentElement.scrollTop;
      if (top > elementPosition - 60) {
        console.log(top > elementPosition);
        sidebar.classList.add('user--sticky');
      } else {
        sidebar.classList.remove('user--sticky');
      }
    });
  },
  sidebarController: function () {

    var navbar_initialized = false;

    lbd = {
      misc: {
        navbar_menu_visible: 0
      },
      initRightMenu: function () {
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
              
              $bodyClick.addEventListener('click', function(e){
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
    if(window.innerWidth <= 762){
      lbd.initRightMenu();      
    }
    window.addEventListener('resize', function(){
      if(window.innerWidth <= 762){
        lbd.initRightMenu();      
      }
    });
  }
}