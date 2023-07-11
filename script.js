function swtitchLink(link) {
    for(let i=0; i<3; i++)
        about_l[i].classList.remove("active_link");
    for(let i=0; i<3; i++)
        about_c[i].classList.remove("active_content");
    link.currentTarget.classList.add("active_link");
    let a = link.currentTarget.getAttribute("value");
    let b = document.getElementById(a);
    b.classList.add("active_content");
}

function openMenu(link) {
    nav.style.right = "0";
}

function closeMenu(link) {
    nav.style.right = "-200px";
}

let arr = ["skills", "edu", "extra"];
let about_l = document.querySelectorAll(".about_links");
let about_c = document.querySelectorAll(".about_link_content");
for(let i=0; i<3; i++)
{
    about_l[i].addEventListener("click", swtitchLink);  
}
let nav = document.querySelector(".nav_list");
let mq = document.getElementById("menu_button");
let cm = document.getElementById("close_button");
mq.addEventListener("click", openMenu);
cm.addEventListener("click", closeMenu);
