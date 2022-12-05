import '/style/main.scss';
import './home.scss';
import './home-intro.scss';
import './pages/med/med-intro.scss';
import './pages/dent/dent-intro.scss';
import './pages/analisys/analisys.scss';
import '/scripts/main';

const dent = document.querySelector('#dent');
const med = document.querySelector('#med');
const anal = document.querySelector('#anal');
const info = document.querySelector('#info');
const home = document.querySelector('#home');


const dentLink = document.querySelector('.circle__dent');
const analLink = document.querySelector('.circle__anal');
const medLink = document.querySelector('.circle__serv');
const links = [dentLink, analLink, medLink]
const goHomeEls = document.querySelectorAll('[data-home]')

console.log(goHomeEls)

function handleClick(event) {
	event.preventDefault();

	switch (event.currentTarget) {
		case dentLink:
			dent.classList.remove('hide')
			home.classList.add('hide')

			break;
		case analLink:
			anal.classList.remove('hide')
			home.classList.add('hide')
			info.classList.remove('hide')
			break;
		case medLink:
			med.classList.remove('hide')
			home.classList.add('hide')
			info.classList.remove('hide')
			break;
	}

}



function handleGoHome(event) {
	event.preventDefault();

	dent.classList.add('hide')
	anal.classList.add('hide')
	med.classList.add('hide')
	home.classList.remove('hide')
	info.classList.add('hide')

}


links.forEach(el => {
	el.addEventListener("click", handleClick)
})

goHomeEls.forEach(el => {
	el.addEventListener("click", handleGoHome)
})
