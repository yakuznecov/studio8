var btn = document.getElementsByClassName("top__gallery-item");
var gallery = document.getElementById("gallery");

var images = new Array(
    "img/pic1.jpg",
    "img/pic2.jpg",
    "img/pic3.jpg",
    "img/pic4.jpg"
);

for(let i=0; i<btn.length; i++){
    btn[i].onclick = function(){
        gallery.src = images[i];
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
    };
}


let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		}
	});
};
function menu_close() {
	let iconMenu = document.querySelector(".icon-menu");
	let menuBody = document.querySelector(".menu__body");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}