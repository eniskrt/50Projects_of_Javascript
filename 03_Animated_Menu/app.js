const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");

open.addEventListener("click", () => {
    if (!container.classList.contains("show-nav")) {
        container.classList.add("show-nav");
        bar1.classList.add("bar1Rot");
        bar2.style.display= "none";
        bar3.classList.add("bar3Rot");
        
    }else{
        container.classList.remove("show-nav");
        bar1.classList.remove("bar1Rot");
        bar2.style.display= "block";
        bar3.classList.remove("bar3Rot");
    }
})

