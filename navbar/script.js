const mobileBtn = document.querySelector(".navbar__mobile--btn");
const mobileMenu = document.querySelector(".navbar__mobile--items");
const mobileLogo = document.querySelector(".navbar__mobile--logo");

function activateMobile() {
	mobileMenu.classList.toggle("disableMobile");
	// mobileBtn.classList.toggle("disabledMobile");
	// mobileLogo.classList.toggle("disabledMobile");
	mobileBtn.style.display = "none";
	mobileLogo.style.display = "none";
	mobileMenu.classList.toggle("activateMobile");
}

mobileBtn.addEventListener("click", activateMobile);
