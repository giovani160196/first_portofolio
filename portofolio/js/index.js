const nav = document.querySelector('nav');
const nav_a = nav.querySelectorAll('a');
const section = document.querySelectorAll('section');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');
const bullets = document.querySelectorAll('.bullet');
const contact = document.querySelector('.contact');
const form = contact.querySelector('form');
const form_p = form.querySelectorAll('p');
const form_input = form.querySelectorAll('input');
const aside = document.querySelector('aside');
const bookmark = document.querySelector('aside').querySelector('.bookmark');
const sosmed = document.querySelectorAll('.sosmed');
const home_wrapper_p = document.querySelector('.home').querySelector('.wrapper');

home_wrapper_p.style.height = window.innerHeight + 'px';
aside.style.height = window.innerHeight - 100 + 'px';

nav.addEventListener('click', function(e) {
	if(e.target.localName == 'a') {
		for(let i=0; i<nav_a.length; i++) {
			if(nav_a[i].classList.contains('active')) {
				nav_a[i].classList.remove('active');
			}
			
		}
		for(let i=0; i<section.length; i++) {
			section[i].classList.remove('show');
			section[i].classList.add('hide');
			if(section[i].classList.contains(e.target.innerText)) {
				section[i].classList.add('show');
				section[i].classList.remove('hide');
			}
		}
		e.target.classList.add('active');
		if(e.target.innerText=='contact') {
			form_input[0].setAttribute("value", " ");
		}
		else {
			form_input[0].removeAttribute("value");
		}
	}
});

bookmark.addEventListener('click', function(e) {
	if(window.innerWidth<=1292) {
		window.screenTop = 0;
	}
	else {
		for(let i=0; i<nav_a.length; i++) {
			if(nav_a[i].classList.contains('active')) {
				nav_a[i].classList.remove('active');
			}
		}
		for(let i=0; i<section.length; i++) {
			if(section[i].classList.contains('show')) {
				section[i].classList.remove('show');
				section[i].classList.add('hide');
			}
		}
		nav_a[0].classList.add('active');
		section[0].classList.remove('hide');
		section[0].classList.add('show');
	}
});

for(let i=0; i<section.length; i++) {
	if(window.innerWidth > 1260) {
		section[i].style.height = window.innerHeight + 'px';
	}
}

for(let i=0; i<thumbs.length; i++) {
	thumbs[i].addEventListener('click', function(e) {
		for(let i=0; i<thumbs.length; i++) {
			if(thumbs[i].classList.contains('thumb-active')) {
				thumbs[i].classList.remove('thumb-active');
			}
		}
		thumbs[i].classList.add('thumb-active');
		jumbo.src = e.target.src;
	});
}

for(let i=0; i<bullets.length; i++) {
	bullets[i].addEventListener('click', function(e) {
		for(let i=0; i<bullets.length; i++) {
			if(bullets[i].classList.contains('bullet-active')) {
				bullets[i].classList.remove('bullet-active');
			}
		}
		bullets[i].classList.add('bullet-active');
		switch(i) {
			case 0:
			for(let i=0; i<thumbs.length; i++) {
				thumbs[i].src = "../img/gallery/thumb_"+ (i+1) +".png";
			}
			jumbo.src = thumbs[0].src;
			for(let i=0; i<thumbs.length; i++) {
				if(thumbs[i].classList.contains('thumb-active')) {
					thumbs[i].classList.remove('thumb-active');
				}
			}
			thumbs[0].classList.add('thumb-active');
			break;
			case 1:
			for(let i=0; i<thumbs.length; i++) {
				thumbs[i].src = "../img/gallery/thumb_"+ (i+2) +".png";
			}
			jumbo.src = thumbs[0].src;
			for(let i=0; i<thumbs.length; i++) {
				if(thumbs[i].classList.contains('thumb-active')) {
					thumbs[i].classList.remove('thumb-active');
				}
			}
			thumbs[0].classList.add('thumb-active');
			break;
			case 2:
			for(let i=thumbs.length, j=0; i>0, j<thumbs.length; i--, j++) {
				thumbs[j].src = "../img/gallery/thumb_"+ (i+1) +".png";
			}
			jumbo.src = thumbs[0].src;
			for(let i=0; i<thumbs.length; i++) {
				if(thumbs[i].classList.contains('thumb-active')) {
					thumbs[i].classList.remove('thumb-active');
				}
			}
			thumbs[0].classList.add('thumb-active');
			break;
		}
	});
}

form_p[2].style.paddingRight = '30px';
form_p[2].style.marginLeft = '-5px';

sosmed.forEach(function(sosmed_) {
	sosmed_.addEventListener('click', function(e) {
		window.open('https://www.' + e.target.classList[1] + '.com');
	});
});

//console.log(sosmed);