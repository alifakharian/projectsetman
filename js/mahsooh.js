function data() {
  let html = "";
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3004/mahsool");
  xhr.onload = () => {
    let data = JSON.parse(xhr.responseText);
    data.forEach((elem) => {
      html += `
        <div id="mahsool" class="Mahsool">
        <div class = "image"><div class="new">${elem.new}</div><img src="${elem.img}"></div>
        <h5 class ="title">${elem.title}</h5>
        <div class ="passage">${elem.passage}</div> 
        <div class ="star-number">
        <div class = "starimage"> <img src="${elem.star}"></div>
        <div class="number">${elem.rank}</div>
        </div>
        <div class="cost"> 
        <div class ="off">${elem.off}</div>
        <div class="price-unit">
        <div class ="price"> ${elem.price}</div>
        <div>${elem.unit}</div>
        </div>  
        </div>
       <div class="unit-preprice">
       <div>${elem.preprice}</div>
       <div>${elem.unit}</div>
       </div>
       <div class="showmore"><a href="./takmahsool.html">${elem.showmore}</a></div>
        </div>
        `;
    });
    document.getElementById("root").innerHTML = html;
  };
  xhr.send();
}
data();

const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

let emtyprice = document.querySelector("#emtyprice");
let notExist = document.querySelector("#not-exist");

// let mahsool = document.querySelectorAll("#mahsool")
let start = document.querySelector("#start");
let end = document.querySelector("#end");

let oneclose = document.querySelector("#oneclose");
let twoclose = document.querySelector("#twoclose");
let ok = document.querySelector("#ok");
let cloz = document.querySelector("#close");
let irani = document.querySelector("#irani");
let khareji = document.querySelector("#khareji");
let spring = document.querySelector("#bahar");
let summer = document.querySelector("#tabestan");
let fall = document.querySelector("#paiz");
let winter = document.querySelector("#zemestan");

function bahar() {
  let mahsool = document.querySelectorAll("#mahsool");
  for (let i = 0; i <= mahsool.length; i++) {
    mahsool[i].style.display = "none";
    mahsool[0].style.display = "block";
    mahsool[1].style.display = "block";
    mahsool[2].style.display = "block";
    mahsool[3].style.display = "block";
  }
}
spring.addEventListener("click", bahar);

function tabestan() {
  let mahsool = document.querySelectorAll("#mahsool");
  for (let i = 0; i <= mahsool.length; i++) {
    mahsool[i].style.display = "none";
    mahsool[4].style.display = "block";
    mahsool[5].style.display = "block";
  }
}
summer.addEventListener("click", tabestan);

function paeiz() {
  let mahsool = document.querySelectorAll("#mahsool");
  for (let i = 0; i <= mahsool.length; i++) {
    mahsool[i].style.display = "none";
    mahsool[6].style.display = "block";
    mahsool[7].style.display = "block";
    mahsool[8].style.display = "block";
  }
}
fall.addEventListener("click", paeiz);

function zemestan() {
  let mahsool = document.querySelectorAll("#mahsool");
  for (let i = 0; i <= mahsool.length; i++) {
    mahsool[i].style.display = "none";
    mahsool[9].style.display = "block";
    mahsool[10].style.display = "block";
  }
}
winter.addEventListener("click", zemestan);

function berandirani() {
  let mahsool = document.querySelectorAll("#mahsool");
  for (let i = 0; i <= mahsool.length; i++) {
    mahsool[i].style.display = "none";
    mahsool[11].style.display = "block";
    mahsool[12].style.display = "block";
    mahsool[13].style.display = "block";
    mahsool[14].style.display = "block";
    mahsool[15].style.display = "block";
  }
}
irani.addEventListener("click", berandirani);

function berandkhareji() {
  let mahsool = document.querySelectorAll("#mahsool");
  for (let i = 0; i <= mahsool.length; i++) {
    mahsool[i].style.display = "none";
    mahsool[16].style.display = "block";
    mahsool[17].style.display = "block";
    mahsool[18].style.display = "block";
    mahsool[19].style.display = "block";
  }
}
khareji.addEventListener("click", berandkhareji);

oneclose.addEventListener("click", function () {
  emtyprice.style.display = "none";
  for (let i = 0; i <= mahsool.length; i++) {
    mahsool[i].style.display = "block";
  }
});
twoclose.addEventListener("click", function () {
  notExist.style.display = "none";
  for (let i = 0; i <= mahsool.length; i++) {
    mahsool[i].style.display = "block";
  }
});

function nonvalue() {
  if (start.value == "" || End.value != "") {
    emtyprice.style.display = "block";
  }
}
ok.addEventListener("click", nonvalue);

function limitedprice() {
  let mahsool = document.querySelectorAll("#mahsool");
  for (let i = 0; i <= mahsool.length; i++) {
    mahsool[i].style.display = "none";
    let start = document.querySelector("#start");
    let end = document.querySelector("#end");

    if (start.value <= 74000) {
      notExist.style.display = "block";
      emtyprice.style.display = "none";
    }

    if (end.value >= 671000) {
      notExist.style.display = "block";
      emtyprice.style.display = "none";
    }
    if (start.value == 75000 && end.value == 160000) {
      mahsool[0].style.display = "block";
      mahsool[1].style.display = "block";
      mahsool[2].style.display = "block";
      mahsool[3].style.display = "block";
    }
    if (start.value == 75000 && end.value == 330000) {
      mahsool[0].style.display = "block";
      mahsool[1].style.display = "block";
      mahsool[2].style.display = "block";
      mahsool[3].style.display = "block";
      mahsool[4].style.display = "block";
      mahsool[5].style.display = "block";
      mahsool[6].style.display = "block";
      mahsool[7].style.display = "block";
      mahsool[8].style.display = "block";
      mahsool[9].style.display = "block";
    }

    if (start.value == 75000 && end.value == 500000) {
      mahsool[0].style.display = "block";
      mahsool[1].style.display = "block";
      mahsool[2].style.display = "block";
      mahsool[3].style.display = "block";
      mahsool[4].style.display = "block";
      mahsool[5].style.display = "block";
      mahsool[6].style.display = "block";
      mahsool[7].style.display = "block";
      mahsool[8].style.display = "block";
      mahsool[9].style.display = "block";
      mahsool[10].style.display = "block";
      mahsool[11].style.display = "block";
      mahsool[12].style.display = "block";
      mahsool[13].style.display = "block";
      mahsool[14].style.display = "block";
    }
    if (start.value == 75000 && end.value == 670000) {
      mahsool[i].style.display = "block";
    }

    if (start.value == 250000 && end.value == 330000) {
      mahsool[7].style.display = "block";
      mahsool[8].style.display = "block";
      mahsool[9].style.display = "block";
    }
    if (start.value == 250000 && end.value == 500000) {
      mahsool[7].style.display = "block";
      mahsool[8].style.display = "block";
      mahsool[9].style.display = "block";
      mahsool[10].style.display = "block";
      mahsool[11].style.display = "block";
      mahsool[12].style.display = "block";
      mahsool[13].style.display = "block";
      mahsool[14].style.display = "block";
    }
    if (start.value == 250000 && end.value == 670000) {
      mahsool[7].style.display = "block";
      mahsool[8].style.display = "block";
      mahsool[9].style.display = "block";
      mahsool[10].style.display = "block";
      mahsool[11].style.display = "block";
      mahsool[12].style.display = "block";
      mahsool[13].style.display = "block";
      mahsool[14].style.display = "block";
      mahsool[15].style.display = "block";
      mahsool[16].style.display = "block";
      mahsool[17].style.display = "block";
      mahsool[18].style.display = "block";
      mahsool[19].style.display = "block";
      mahsool[20].style.display = "block";
      mahsool[21].style.display = "block";
      mahsool[22].style.display = "block";
      mahsool[23].style.display = "block";
    }
    if (start.value == 425000 && end.value == 500000) {
      mahsool[12].style.display = "block";
      mahsool[13].style.display = "block";
      mahsool[14].style.display = "block";
    }
    if (start.value == 425000 && end.value == 670000) {
      mahsool[12].style.display = "block";
      mahsool[13].style.display = "block";
      mahsool[14].style.display = "block";
      mahsool[15].style.display = "block";
      mahsool[16].style.display = "block";
      mahsool[17].style.display = "block";
      mahsool[18].style.display = "block";
      mahsool[19].style.display = "block";
      mahsool[20].style.display = "block";
      mahsool[21].style.display = "block";
      mahsool[22].style.display = "block";
      mahsool[23].style.display = "block";
    }
    if (start.value == 600000 && end.value == 670000) {
      mahsool[18].style.display = "block";
      mahsool[19].style.display = "block";
      mahsool[20].style.display = "block";
      mahsool[21].style.display = "block";
      mahsool[22].style.display = "block";
      mahsool[23].style.display = "block";
    }
  }
}
ok.addEventListener("click", limitedprice);

$(document).on("scroll", function () {
  let scrollTop = $(this).scrollTop();
  if (scrollTop > 4000) {
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
