const mobileBtn = document.querySelector(".navbar__mobile--btn");
const mobileMenu = document.querySelector(".navbar__mobile");
const mobileMenuItems = document.querySelectorAll(
	".navbar__mobile--items--link"
);
const mobileLogo = document.querySelector(".navbar__mobile--logo");
const mobileClose = document.querySelector(".navbar__mobile--close");
const regMenu = document.querySelector(".navbar__reg");

function activateMobile() {
	mobileBtn.classList.toggle("disabled");
	mobileLogo.classList.toggle("disabled");
	mobileClose.classList.toggle("disabled");
	mobileMenuItems.forEach((e) => e.classList.toggle("disabled"));
}
function deactivateMobile() {
	mobileBtn.classList.toggle("disabled");
	mobileLogo.classList.toggle("disabled");
	mobileClose.classList.toggle("disabled");
	mobileMenuItems.forEach((e) => e.classList.toggle("disabled"));
}

mobileBtn.addEventListener("click", activateMobile);
mobileClose.addEventListener("click", deactivateMobile);

function showMobile(size) {
	if (size.matches) {
		mobileMenu.style.display = "grid";
		regMenu.style.display = "none";
	} else {
		mobileMenu.style.display = "none";
		regMenu.style.display = "grid";
	}
}

const size = window.matchMedia("(max-width: 768px)");
showMobile(size);

size.addEventListener("change", showMobile);
