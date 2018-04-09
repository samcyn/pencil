var app = {
  fixedSidebar: function () {
    var elementPosition = document.getElementsByTagName("main")[0].offsetTop;
    var sidebar = document.getElementsByClassName('user--leftaside')[0];
    
    window.addEventListener('scroll', function(e){
      var top  = window.pageYOffset || document.documentElement.scrollTop;
      if(top > elementPosition - 60){
        console.log(top > elementPosition);
        sidebar.classList.add('user--sticky');
      }
      else{
        sidebar.classList.remove('user--sticky');
      }
    });
  }
}
