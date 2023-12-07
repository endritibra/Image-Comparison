const slider = document.querySelector("#image-comparison-slider");
const sliderImageWrapper=document.querySelector(".img-wrapper");
const sliderHandle=document.querySelector(".handle");






/*
let isDown = false;

sliderHandle.addEventListener('mousedown', function() {
  isDown = true;
});
window.addEventListener('mouseup', function() {
  isDown = false;
});
window.addEventListener('mousemove', function() {
  if (isDown) {
    sliderHandle.style.left = event.clientX + 'px';
    sliderImageWrapper.style.left=event.clientX +'px';
  }
});

*/


var posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

sliderHandle.addEventListener('mousedown', mouseDown, false);
sliderHandle.addEventListener('touchstart', mouseDown, false);

window.addEventListener('mouseup', mouseUp, false);
window.addEventListener('touchend', mouseUp, false);


function mouseDown(e) {
  e.preventDefault();
  posX = e.clientX - sliderHandle.offsetLeft;
 
  window.addEventListener('mousemove', moveElement, false);
  window.addEventListener('touchmove', moveTouch, false);

}

function mouseUp() {
  window.removeEventListener('mousemove', moveElement, false);
  window.removeEventListener('touchmove', moveTouch, false);

}

function moveElement(e) {
  const sliderLeftX=slider.offsetLeft;
  const sliderWidth=slider.clientWidth;
  const mouseX=e.clientX-sliderLeftX;
  console.log(mouseX)

  //mouseX = e.clientX - posX;
 if(mouseX>-35 && mouseX<(sliderWidth-20)){
  sliderHandle.style.left = mouseX + 'px';
  sliderImageWrapper.style.left=mouseX+25 + 'px';
 }
}

function moveTouch(e){
    const sliderLeftX=slider.offsetLeft;
    const sliderWidth=slider.clientWidth;
    var touch=e.touches[0];
    const mouseX=touch.clientX-sliderLeftX;
    console.log(mouseX)
  
    //mouseX = e.clientX - posX;
   if(mouseX>-35 && mouseX<(sliderWidth-20)){
    sliderHandle.style.left = mouseX + 'px';
    sliderImageWrapper.style.left=mouseX+25 + 'px';
   }
}