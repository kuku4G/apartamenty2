const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');
const cookieBox = document.querySelector('.cookie-box');
const cookieBtn = document.querySelector('.cookie-btn');

//cookie
const showCookie = () => {
	const cookieEaten = localStorage.getItem('cookie');
	if (cookieEaten) {
		cookieBox.classList.add('hide');
	}
};
const handleCookieBox = () => {
	localStorage.setItem('cookie', 'true');
	cookieBox.classList.add('hide');
};

const collection = document.querySelectorAll('.apartments__option-img');

const array = Array.from(collection);
// console.log(array)

var lastScrollTop = 0;
const hiddenElements = document.querySelectorAll('.hidden');

window.addEventListener('scroll', function () {
	var st = window.scrollY || document.body.scrollTop;
	// console.log(st);

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			// console.log(entry.target)
			if (entry.isIntersecting && st > lastScrollTop) {
				entry.target.classList.add('show');
			} else if (entry.isIntersecting && st < lastScrollTop) {
				entry.target.classList.remove('show');
				console.log('remove');
			}
		});
	});
	hiddenElements.forEach((el) => observer.observe(el));
});

const handleNav = () => {
	nav.classList.toggle('nav--active');

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active');
		});
	});

	allSections.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active');
		});
	});

	handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
	allNavItems.forEach((item) => {
		item.classList.toggle('nav-items-animation');
	});
};

const handleObserver = () => {
	const currentSection = window.scrollY;

	allSections.forEach((section) => {
		if (
			section.classList.contains('white-section') &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.add('black-bars-color');
		} else if (
			!section.classList.contains('white-section') &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.remove('black-bars-color');
		}
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

const touchCards = document.querySelectorAll('.card__cards');

for (let i = 0; i < touchCards.length; i++) {
	touchCards[i].classList.add('active')
	// touchCards[i].classList.remove('card__cards-arrow')

	// let isDragging = false;
	// let startY, currentY;

	// touchCards[i].addEventListener(
	// 	'touchstart',
	// 	function (e) {
	// 		this.classList.toggle('active');
	// 		e.preventDefault();
	// 		isDragging = true;
	// 		startY = e.touches[0].clientY;
	// 	}
	// );

	// touchCards[i].addEventListener('touchmove', function (e) {
	// 	// if (!isDragging) return;
		
	// 	// currentY = e.touches[0].clientY;
	// 	// let deltaY = currentY - startY;

	// 	// Aktualizuj pozycję przesunięcia
	// 	// window.scrollBy(0, -deltaY);
	// 	// console.log(deltaY)
	// });

	// touchCards[i].addEventListener('touchend', function (e) {
	// 	isDragging = false;
	// 	e.preventDefault();
	// });
}

handleCurrentYear();
navBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', handleObserver);
cookieBox.addEventListener('click', handleCookieBox);
showCookie();
