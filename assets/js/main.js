$(() => {
  $(".hamburger").click(function () {
    $("nav").toggleClass("toggle");
    $(".hamburger").toggleClass("change");
  });

// Go top of the website
  $("#go-top").click(function () {
    $("html").animate({ scrollTop: 0 }, 800);
  });

// Change nav color & logo
  const navChangeOrange = function() {
    $(".header-bottom").addClass("sticky");
    $(".main-logo a img:eq(0)").addClass("none");
    $(".main-logo a img:eq(1)").removeClass("none");
    $(".header-bottom").addClass("nav-color");
  };

  const navChangeWhite = function() {
    $(".header-bottom").removeClass("sticky");
    $(".main-logo a img:eq(1)").addClass("none");
    $(".main-logo a img:eq(0)").removeClass("none");
    $(".header-bottom").removeClass("nav-color");
  }

  $(window).scroll(function() {
    if ($(window).scrollTop() > 58) {
      navChangeOrange();
      $('.to-top').css({"bottom" : "2rem"});
    } else {
      navChangeWhite();
      $('.to-top').css({"bottom" : "-5rem"});
    }
  });
  if ($(window).scrollTop() > 58) {
    navChangeOrange();
  }

});
