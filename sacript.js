const images = document.querySelectorAll(".images img");
const popup = document.querySelector(".popup");
const popupImg = document.getElementById("popupImg");
const close = document.querySelector(".close");
const prev = document.getElementById("prev");
const next= document.getElementById("next");

 let currentIndex= 0;
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;                  
    showImage();                         
    popup.style.display = "flex";        
  });
});
function showImage() {
  popupImg.src = images[currentIndex].src;
}
next.addEventListener("click", ()=>{
  currentIndex =(currentIndex +1) %images.length;
  showImage();
});
prev.addEventListener("click", ()=>{
currentIndex=(currentIndex -1 +images.length)%images.length;
showImage();
});

close.addEventListener("click",()=>{
 popup.style.display="none";
});