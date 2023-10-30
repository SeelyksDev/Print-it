const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
//Récupération des flèches
let arrows = document.querySelectorAll('#banner .arrow')
// Boucle pour mettre un eventListener sur chacune des flèches
for (i = 0; i < arrows.length; i++) {
	arrows[i].addEventListener('click', (event) => {
		console.log(event.target);
	})
	}

 