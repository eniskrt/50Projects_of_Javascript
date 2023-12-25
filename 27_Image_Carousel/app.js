const imagesContainer = document.getElementById("images");
const images = document.querySelectorAll("#images img");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let interval = setInterval(play,2000)
let idx = 0;
// console.log(images);

function play() {
    idx ++;
    changeImage()
}

function changeImage() {
    if (idx > images.length-1) {
        idx = 0;
    } else if(idx < 0){
        idx = images.length -1;
    }
    imagesContainer.style.transform = `translateX(${-idx * 700}px)`
}
function resetInterval() {
    clearInterval(interval);
    interval = setInterval(play,2000)
}

nextBtn.addEventListener("click",()=>{
    idx++;
    changeImage()
    resetInterval()
})
prevBtn.addEventListener("click",()=>{
    idx--;
    changeImage()
    resetInterval()
})