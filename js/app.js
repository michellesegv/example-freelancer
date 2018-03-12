window.addEventListener("scroll", scrollHeader);
window.addEventListener("scroll", scrollSections);

function scrollHeader() {
    if (document.body.scrollTop > 70) {
      var header = document.getElementsByClassName("js-header");
      for (var i = 0; i < header.length; i++){
        header[i].classList.add("height-80");
        header[i].classList.remove("height-100");
      }
      var title = document.getElementsByClassName("js-title");
      for (var i = 0; i < title.length; i++){
        title[i].classList.add("font-15");
        title[i].classList.remove("font-17");
      }
    };
    if (document.body.scrollTop <= 70) {
      var xHeader = document.getElementsByClassName("js-header height-80")
      for (var i = 0; i < xHeader.length; i++){
        xHeader[i].classList.add("height-100");
        xHeader[i].classList.remove("height-80");
      }
      var title = document.getElementsByClassName("js-title font-15");
      for (var i = 0; i < title.length; i++){
        title[i].classList.add("font-17");
        title[i].classList.remove("font-15");
      }
    };
};

function scrollSections() {
    var nav = document.getElementsByClassName("js-nav");
    for (var i = 0; i < nav.length; i++) {
      if (document.body.scrollTop > 650 && document.body.scrollTop <= 1550 ) {
      nav[0].classList.add("back-green");
      nav[1].classList.remove("back-green");
      nav[2].classList.remove("back-green");

      };
      if (document.body.scrollTop > 1550 && document.body.scrollTop <= 2100 ) {
      nav[1].classList.add("back-green");
      nav[0].classList.remove("back-green");
      nav[2].classList.remove("back-green");

      };
      if (document.body.scrollTop > 2100) {
      nav[2].classList.add("back-green");
      nav[0].classList.remove("back-green");
      nav[1].classList.remove("back-green");

      };
    }
}
