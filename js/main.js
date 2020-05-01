
const menuListDom = document.querySelector('.nav-list');
const menuTooglerDom = document.querySelector('.nav-menu-btn');

let isMenuOpened = false;
let closeMenuFn = null;

const closeMenu = () => {
	menuListDom.classList.add('menu-hidden');
	isMenuOpened = false;
	document.removeEventListener('click', closeMenuFn);
}

const openMenu = () => {
	menuListDom.classList.remove('menu-hidden');
	isMenuOpened = true;
	closeMenuFn = closeMenu;
	document.addEventListener('click', closeMenuFn);
}

const menueToogleHendler = (e) => {
	e.stopPropagation();
	if (isMenuOpened) {
		closeMenu(); 
	} else {
		openMenu();
	}
}

menuTooglerDom.addEventListener('click', menueToogleHendler);
