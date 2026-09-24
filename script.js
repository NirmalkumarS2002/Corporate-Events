// const navbar = document.querySelector(".menuwrap"), menubtn = document.querySelector(".menubtn"), menuspan = document.querySelector(".menuspan");
// menubtn.addEventListener("click", () => {
//     const open = menuspan.textContent === "menu";
//     menuspan.textContent = open ? "close" : "menu";
//     navbar.classList.toggle("active", open);
//     body.classList.add("scroll")
// });


let sidebar=document.querySelector(".menuwrap")
let menubtn=document.querySelector(".menubtn")
let menuspan=document.querySelector(".menuspan")

menubtn.addEventListener("click",()=>{
const open = menuspan.textContent === "menu";
    menuspan.textContent = open ? "close" : "menu";

        document.body.classList.toggle("menu-open",open);
    sidebar.classList.toggle("active", open);
})



// Footer subscribe form
const subemail = document.querySelector("#subemail"), subbtn = document.querySelector(".subscribe-btn"), frmerr = document.querySelector(".frmerr");
subbtn.addEventListener("click", e => {
    e.preventDefault();
    const v = subemail.value.trim();
    frmerr.style.color = "#ff8a8a";
    if (v === "") { frmerr.textContent = "Please enter your email address"; return }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { frmerr.textContent = "Please enter a valid email address"; return }
    frmerr.style.color = "#7be08a";
    frmerr.textContent = "Subscribed successfully!";
    subemail.value = "";
    setTimeout(() => { frmerr.textContent = "" 
        window.location.href="404.html"
    }, 1000);
});
document.querySelectorAll("img").forEach(i => i.addEventListener("error", () => { i.style.background = "#c9d0de"; i.alt = i.alt + " (image unavailable)" }));

document.querySelectorAll(".errorpage").forEach(el => el.addEventListener("click", () => { window.location.href = "404.html" }));
