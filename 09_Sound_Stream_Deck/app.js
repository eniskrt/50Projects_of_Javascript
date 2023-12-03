const sounds = ["applause","boo","gasp","tada","victory","wrong"];

sounds.forEach((sound) => {
    const btn =document.createElement('button');
    btn.classList.add("btn");
    btn.innerHTML =`${sound}<i class="fa-solid fa-music"></i>`;
    

    btn.addEventListener("mouseover", () => {
        document.getElementById(sound).play();
    })
    btn.addEventListener("mouseleave", () => {
        document.getElementById(sound).pause();
    })

    document.getElementById("buttons").appendChild(btn);
})