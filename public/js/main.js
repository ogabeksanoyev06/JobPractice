$(document).ready(function () {
  $("#carousel1").owlCarousel({
    items: 5,
    loop: false,
    nav: true,
    dots: false,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: "fade-out",
    animateIn: "fade-in",
    responsive: {
      0: {
        items: 1,
        nav: true,
        loop: true,
      },
      600: {
        items: 3,
        nav: true,
        loop: false,
      },
      1000: {
        items: 5,
        nav: true,
        loop: false,
      },
    },
  });

  $("#carousel2").owlCarousel({
    items: 5,
    loop: false,
    nav: true,
    dots: false,
    margin: 10,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });

  $("#carousel3").owlCarousel({
    items: 5,
    loop: false,
    nav: true,
    dots: false,
    margin: 10,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });
});
