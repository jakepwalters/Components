const mobileBtn = document.querySelector(".navbar__mobile--btn");
const mobileMenu = document.querySelector(".navbar__mobile--items");

const mobileLogo = document.querySelector(".navbar__mobile--logo");

function activateMobile() {
	mobileMenu.classList.toggle("disabled");
	mobileBtn.classList.toggle("disabled");
	mobileLogo.classList.toggle("disabled");
	mobileMenu.classList.toggle("active");
}

mobileBtn.addEventListener("click", activateMobile);
