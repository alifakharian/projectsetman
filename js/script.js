let EnterVoroodi = document.getElementById("Enter-voroodi");
let ExiteVoroodi = document.getElementById("exite-voroodi");
let voroodi = document.querySelector(".page-voroodi");
let cellphone = document.getElementById("cellphone");
let mobile = document.getElementById("mobile");
let firstcontinew = document.getElementById("firstcontinew");
let secendcontinew = document.getElementById("secendcontinew");
let sms = document.querySelector(".sms");
let start = document.querySelector(".start");
let combackindex = document.getElementById("combackindex");
let extiesms = document.getElementById("extiesms");
let userphone = document.getElementById("userphone");
let total = document.getElementById("total");

combackindex.addEventListener("click", function () {
  voroodi.style.display = "none";
  total.style.overflowY = "scroll";

});
extiesms.addEventListener("click", function () {
  voroodi.style.display = "none";
  total.style.overflowY = "scroll";
  
});

EnterVoroodi.addEventListener("click", function () {
  voroodi.style.display = "block";
  total.style.overflowY = "hidden";
});
ExiteVoroodi.addEventListener("click", function () {
  voroodi.style.display = "none";
  total.style.overflowY = "scroll";
});

function fristedame() {
  let mobile = document.getElementById("mobile");
  let expaercellphone = document.getElementById("expaercellphone");
  // let check1 = document.getElementById("check1");
  let warm = document.getElementById("warm");

  if (
    mobile.value.length == 11 &&
    mobile.value[0] == 0 &&
    mobile.value[1] == 9
  ) {
    cellphone.innerHTML = mobile.value;
    sms.style.display = "block";
    start.style.display = "none";
  }

  if (mobile.value == "") {
    warm.innerHTML = `<h6 class="emtyphonenumber"><span>!</span>تلفن همراه خود را وارد کنید</h6>`;
  } else {
    warm.innerHTML = `<h6 class="expaercellphone"><span>!</span>تلفن هراه معتبر نمی باشد</h6>`;
  }
}
firstcontinew.addEventListener("click", fristedame);

function secendedame() {
  let submit = document.querySelector(".submit");
  let first = document.getElementById("first");
  let secend = document.getElementById("secend");
  let third = document.getElementById("third");
  let forth = document.getElementById("forth");
  let entercode = document.getElementById("entercode");
  let acceptcode = document.getElementById("acceptcode");
  let expaercode = document.getElementById("expaercode");

  if (
    first.value != "" &&
    secend.value != "" &&
    third.value != "" &&
    forth.value != "" &&
    first.value.length == 1 &&
    secend.value.length == 1 &&
    third.value.length == 1 &&
    forth.value.length == 1
  ) {
    userphone.innerHTML = mobile.value;
    submit.style.display = "block";
    extiesms.style.display = "none";
    secendcontinew.style.display = "none";
    first.style.display = "none";
    secend.style.display = "none";
    third.style.display = "none";
    forth.style.display = "none";
    acceptcode.style.display = "none";
    entercode.style.display = "none";
    expaercode.style.display = "none";
  }
  if (
    first.value == "" &&
    secend.value == "" &&
    third.value == "" &&
    forth.value == ""
  ) {
    expaercode.innerHTML = `<h6 class ="expaercode"><span>!</span>کد ارسال شده را وارد کنید</h6>`;
  } else {
    expaercode.innerHTML = `<h6 class ="expaercode"><span>!</span>کد وارد شده معتبر نمی باشد</h6>`;
  }
}
secendcontinew.addEventListener("click", secendedame);

function header() {
  let html = "";
  fetch("http://localhost:3004/header")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((elem) => {
        html =
          html +
          `
     <div class="header">
     <div class = "image"> <img src="${elem.img}" ></div>
     </div>
        
      `;
      });
      document.getElementById("header").innerHTML = html;
    });
}
header();
// End header

// start product
function product() {
  let html = "";
  fetch("http://localhost:3004/product")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((elem) => {
        html =
          html +
          `
     <div class="product">
     <div class="circle"></div>
     <div class = "image"> <img src="${elem.img}" ></div>
     <div class="title">${elem.title}</div>
     </div>
        
      `;
      });
      document.getElementById("product").innerHTML = html;
    });
}
product();
// End product

// start slider
var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var index = 0;

function prevSlide(n) {
  index += n;
  console.log("prevSlide is called");
  changeSlide();
}
function nextSlide(n) {
  index += n;
  changeSlide();
}

changeSlide();

function changeSlide() {
  if (index > slides.length - 1) index = 0;

  if (index < 0) index = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";

    dots[i].classList.remove("active");
  }
  slides[index].style.display = "block";
  dots[index].classList.add("active");
}
// End slider

$(document).on("scroll", function () {
  let scrollTop = $(this).scrollTop();
  // console.log(scrollTop);
  if (scrollTop > 2000) {
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
