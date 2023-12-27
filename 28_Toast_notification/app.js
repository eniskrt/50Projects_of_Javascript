const notifContainer = document.querySelector(".notifContainer");
const button = document.getElementById("button");

const notifications = [
    "Instagram Bildirimi",
    "Twitter Bildirimi",
    "Facebook Bildirimi",
    "WhatsApp Bildirimi",
    "YouTube Bildirimi",
    "Medium Bildirimi",
    "Linkedin Bildirimi"
];

const colors = [
    "red",
    "blue",
    "green",
    "purple",
    "black",
    "gray",
    "orange"
];

button.addEventListener("click",createNotification)

function createNotification(){
    const notif = document.createElement("div");
    notif.classList.add("notif")
    notif.innerText = getRandomNotif()
    notif.classList.add(getRandomColor())
    // notif.style.backgroundColor = getRandomColor()

    notifContainer.appendChild(notif)

    setTimeout(()=>{
        notif.remove()
    },3000)
}

function getRandomNotif() {
    // console.log(notifications[Math.floor(Math.random() * notifications.length)]);
    return notifications[Math.floor(Math.random() * notifications.length)]
}
function getRandomColor() {
    return colors[Math.floor(Math.random()*colors.length)]
}