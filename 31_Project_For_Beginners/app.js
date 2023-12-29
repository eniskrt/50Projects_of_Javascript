import {testimonials} from "./testimonals.js"

const userTxt = document.querySelector(".user-text");
const userImg = document.querySelector(".user-img");
const userName = document.querySelector(".user-name");
const userJob = document.querySelector(".job");

let idx = 1

function updateUser() {
    const {name,position,photo,text} = testimonials[idx];
    userName.innerHTML = name;
    userJob.innerHTML = position;
    userImg.src = photo;
    userImg.alt = name;
    userTxt.innerHTML = text;

    idx++

    if (idx > testimonials.length-1) {
        idx = 0;
    }
}

setInterval(()=>{
    updateUser()
},10000)