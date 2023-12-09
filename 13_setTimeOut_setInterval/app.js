const tagsEl = document.getElementById("tags");
const textArea = document.getElementById("textarea");

textArea.addEventListener("keyup",(e) => {
    createText(e.target.value);
    if(e.key ==="Enter"){
        setTimeout(()=>{
            e.target.value = ""

            randomSelect();
        })
    }
})

function createText(input) {
    const tags = input
        .split(",")
        .filter((tag) => tag.trim() !=="")
        .map((tag) => tag.trim())
        // console.log(tags);
        tagsEl.innerHTML="";
        tags.forEach((e) => {
            const tagEl = document.createElement("span")
            tagEl.classList.add("tag")
            tagEl.innerHTML = e;
            tagsEl.appendChild(tagEl);
        })
}

function randomSelect() {
    // console.log();

    const times = 30;

    const interval = setInterval(()=>{
        const randomTag = pickRandomTag();
        highlightTag(randomTag);

        setTimeout(() =>{
            unHiglightTag(randomTag)
        },100)
    },100)

    setTimeout(() =>{
        clearInterval(interval);

        setTimeout(() =>{
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        },100)
    },times*100)
};

function pickRandomTag() {
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add("highlight");
}
function unHiglightTag(tag) {
    tag.classList.remove("highlight");
}