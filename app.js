const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev")
const imageContainerEl = document.querySelector(".mySlides");
const imgsEl = document.querySelectorAll("img");

let firstImg = 1;
let timeout;


nextEl.addEventListener("click", () => {
  firstImg++;
  clearTimeout(timeout);
  updateImg();

});

prevEl.addEventListener("click", () => {
  firstImg--;
  clearTimeout(timeout);
  updateImg();


});

updateImg();

function updateImg(){
  if(firstImg > imgsEl.length) {
    firstImg = 1
  } else if(firstImg < 1) {
    firstImg = imgsEl.length;
  }
  imageContainerEl.style.transform = 
  `translateX( -${(firstImg - 1) 
  * 700}px)`;
  
  timeout = setTimeout(() => {
    firstImg++;
    updateImg();
  }, 3000)

}



