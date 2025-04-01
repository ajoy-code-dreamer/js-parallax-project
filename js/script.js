// ================= parallaxJs ===============
let banner_bg = document.querySelector("#banner")
let astro = document.querySelector(".astro")
let moon = document.querySelector(".moon")


banner_bg.addEventListener("mousemove", (e)=>{
    astro.style.left = e.clientY/5 + "px"
    astro.style.top = e.clientX/5 + "px"
    moon.style.left = e.clientX/50 + "%"
    moon.style.top = e.clientY/50 + "%"
})



// ================= parallaxJs ===============