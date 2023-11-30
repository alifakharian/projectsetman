// let input= document.querySelector("#input")
function product() {
  let html = "";
  fetch("http://localhost:3004/location")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((elem) => {
        html =
          html +
          `
        <div class="location">
        <div class = "image"><div class="leyer"><h5>${elem.title}</h5>
        <div class="adress">${elem.adress}</div>
        <div class="timework">${elem.timework}</div>
        <div class="daywork">${elem.daywork}</div>
        <div class="map"><a>${elem.map}</a></div>
        </div><img src="${elem.img}">
        
        </div> 
        <div class="name">${elem.title}</div>
        </div>
      `;
      });
      document.getElementById("location").innerHTML = html;
    });
}
product()



$(document).on("scroll",function(){
  let scrollTop=$(this).scrollTop();
 if(scrollTop >350){
   $("div.top").fadeIn(500)
 }
 else{
   $("div.top").fadeOut(500) 
 }
});
$("div.top").click(function(){
$("html,body").animate({
 scrollTop:0,
},500,"swing")

});

