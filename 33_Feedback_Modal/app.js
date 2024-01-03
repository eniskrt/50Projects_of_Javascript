const ratings = document.querySelectorAll(".rating");
const btn = document.getElementById("send");
const panel = document.querySelector(".panel-container");

ratings.forEach(rating =>{
    rating.addEventListener("click",(e)=>{
        // console.log(e.target.parentNode);
        if(e.target.parentNode.classList.contains("rating")){
            removeActive()
            e.target.parentNode.classList.add("active")
        }
    })
})