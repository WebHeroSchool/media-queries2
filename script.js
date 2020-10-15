const 	burger = document.querySelector('.burger'),
		nav = document.querySelector('.nav__links'),
		links = document.querySelectorAll('.nav__links li');

function slider() {
	burger.addEventListener('click', () => {

		nav.classList.toggle('nav__active');

		burger.classList.toggle('toggle');

		links.forEach((link, index) => {
			if(link.style.animation) {
				link.style.animation = '';
			} 
			else {
				link.style.animation = 'navlinksFade .5s ease forwards ${index/7 + 0.3}s'
			}
		})
	})
}

slider();