

$(".owl-one").owlCarousel({
  loop: true,
  dotsEach: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    800: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});


$(".owl-two").owlCarousel({
  loop: true,
  dotsEach: true,
  autoplay: true,
  stagePadding: 100,
  responsive: {
    0: {
      items: 1,
    },
    800: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});


$(".owl-three").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 20,
  responsive: {
    0: {
      items: 1,
    },
    800: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});



$(".blog-carousel").owlCarousel({
  margin: 10,
  dots: false,
  nav: true,
  navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],

  responsive: {
    0: {
      items: 1,
    },

    800: {
      items: 2,
    },

    1000: {
      items: 3,
    }
  }
})