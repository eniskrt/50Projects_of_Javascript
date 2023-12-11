const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    counter.innerText ="0";
    const updateCounter = () => {
        const target = Number(counter.getAttribute("data-target"));
        // console.log(typeof target);

        const c = +counter.innerText;
        // console.log(c);

        const increment = target/200;

        if(c < target){
            counter.innerText = `${Math.floor(c+increment)}`
            setTimeout(updateCounter,1)
        }else{
            counter.innerText = target;
        }
    }
    updateCounter()
})