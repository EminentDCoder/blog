let menu = document.getElementById("menu");
let head = document.getElementById("header");

menu.addEventListener("click", headerDisplay);
function headerDisplay(){
    head.classList.toggle('active');
}
