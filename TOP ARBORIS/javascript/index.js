$(document).ready(function () {
  $(".main-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

function hideShowNavMenu() {
  let header = document.getElementById("header");
  let navigationUl = document.getElementById("navigation-ul");
  let menuButtons = document.getElementsByClassName("menu-button");
  let navigation = document.getElementById("menu-nav");
  let navMenuButton = document.getElementsByClassName("menu-icon");
  let navPhoneMobile = document.getElementsByClassName("nav-phone-mobile");

  if (navigationUl.style.display === "block") {
    navigationUl.style.display = "none";
    header.style.height = "65px";
    navMenuButton[0].classList.remove("fa-times");
    navMenuButton[0].classList.add("fa-bars");
    navPhoneMobile[0].style.display = "block";
  } else {
    navigationUl.style.display = "block";
    header.style.height = "auto";
    navigation.style.height = "100vh";
    navMenuButton[0].classList.remove("fa-bars");
    navMenuButton[0].classList.add("fa-times");
    navPhoneMobile[0].style.display = "none";

    $(menuButtons).on("click", function () {
      navigation.style.height = "0";
      navigationUl.style.display = "none";
      navMenuButton[0].classList.remove("fa-times");
      navMenuButton[0].classList.add("fa-bars");
      navPhoneMobile[0].style.display = "block";
    });
  }
}

$(".menu-button").click(function () {
  var pageId = $(this).attr("data-page");

  if (window.innerWidth <= 768) {
    $("html, body").animate({ scrollTop: $("#" + pageId).offset().top - 100 }, 'slow');
  }

  else {
    $("html, body").animate({ scrollTop: $("#" + pageId).offset().top - 30 }, 'slow');
  }
});