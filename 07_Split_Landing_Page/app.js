const container = document.querySelector(".container");
const splitLeft = document.querySelector(".left");
const splitRight= document.querySelector(".right");

splitLeft.addEventListener("mouseover",() => {
    container.classList.add("hover-left");
})
splitLeft.addEventListener("mouseleave",() => {
    container.classList.remove("hover-left");
})
splitRight.addEventListener("mouseover",() => {
    container.classList.toggle("hover-right");
})
splitRight.addEventListener("mouseleave", () => {
    container.classList.remove("hover-right")
})