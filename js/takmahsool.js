let Captalimge = document.querySelector("div.captal-image > img");
let Smallimageleft = document.querySelectorAll(" div.col-md-3 > img");
let Smallimageright = document.querySelectorAll("div.swiper-slide > div > img");

Smallimageleft.forEach(function (elem) {
  elem.addEventListener("click", function () {
    removeactiveclass();
    elem.classList.add("activeclass");
    Captalimge.src = `${elem.src}`;
  });
});
Smallimageright.forEach(function (elem) {
  elem.addEventListener("click", function () {
    removeactiveclass();
    elem.classList.add("activeclass");
    Captalimge.src = `${elem.src}`;
  });
});

function removeactiveclass() {
  Smallimageleft.forEach(function (elem1) {
    elem1.classList.remove("activeclass");
  });
  Smallimageright.forEach(function (elem2) {
    elem2.classList.remove("activeclass");
  });
}

$(document).on("scroll", function () {
  let scrollTop = $(this).scrollTop();
  // console.log(scrollTop);
  if (scrollTop > 100) {
    $("div.top").fadeIn(500);
  } else {
    $("div.top").fadeOut(500);
  }
});
$("div.top").click(function () {
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    500,
    "swing"
  );
});
