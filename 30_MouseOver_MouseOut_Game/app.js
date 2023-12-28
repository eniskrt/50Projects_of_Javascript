const container = document.getElementById("container");

const colors = ["#001f3f", "#2ecc71", "#f39c12", "#9b59b6", "#e74c3c", "#3498db", "#bdc3c7", "#e84393", "#556b2f", "#ffd700", "#7f8c8d", "#c0392b", "#2980b9", "#d35400", "#8e44ad"]

const SQUARE = 10000;

for (let i = 0; i < SQUARE; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover",()=>setColor(square))
    square.addEventListener("mouseout",()=>removeColor(square))

    container.appendChild(square)
}

function setColor(div) {
    const randomColor = getRandomColor()
    div.style.backgroundColor = randomColor;
    div.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

function removeColor(div) {
    div.style.backgroundColor = "#111"
    div.style.boxShadow = "0 0 2px #000"
}