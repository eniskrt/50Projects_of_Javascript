const ratings = document.querySelectorAll(".rating");
const btn = document.getElementById("send");
const panel = document.querySelector(".panel-container");
let selectedRating = "Geri bildirim seçmediniz!"

ratings.forEach((rating) =>{
    rating.addEventListener("click",(e)=>{
        // console.log(e.target.parentNode);
        if(e.target.parentNode.classList.contains("rating")){
            removeActive()
            e.target.parentNode.classList.add("active")
            // console.log(e.target.nextElementSibling.innerHTML);
            selectedRating = e.target.nextElementSibling.innerHTML;
        }
    })
})

function removeActive() {
    for(let i=0; i<ratings.length;i++){
        ratings[i].classList.remove("active")
    }
}

btn.addEventListener("click",()=>{
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Geri bildirimizniz bizim için değerli.</strong>
    <br>
    <strong>Geri Bildiriminiz : ${selectedRating}</strong>
    <p>Geri bildiriminizi kendimizi geliştirmek için kullanacağız.</p>
    `
})