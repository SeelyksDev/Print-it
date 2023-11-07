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
		
	}
)}

 let variable;

 const azer = "valeur"

 if (azer === "valeur") {
	console.log("validé");
 } else {
	console.log("c'est faux");
 }

 const array = ["a", "b", "c", "d", "e"]

 for (let index = 0; index < array.length; index++) {
	const element = array[index];
	console.log(element);
	watch(element)
 }

 function watch (a) {
	console.log(a);
 }

 const title = document.getElementById('title')
 const paragraphe = document.querySelectorAll('.paragraphe')
 const button = document.getElementById('button')
 const form = document.getElementById('form')

 form.addEventListener("submit", (event) => {
	event.preventDefault()
 })

 button.addEventListener("click", () => {

 })

 fetch("http//localhost:8080")
 .then ((response) => {
	return response.json()

 }) 

 .then((data) => {
	console.log(data);
 })



