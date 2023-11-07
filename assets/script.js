const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
//Récupération des flèches
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
let i = -1;

arrowRight.addEventListener("click", () => {
  // Récupération de l'id "banner"
  const banner = document.getElementById("banner");
  // Création d'un élément "img"
  const imageAdd = document.createElement("img");
  //Ajout d'une class "banner-img" à mon élément "img"
  imageAdd.classList = "banner-img";
  //Incrémentation de i qui parcours le tableau "slides"
  i++;
  // Récupération des valeurs choisi dans le tableau
  let image = slides[i].image;
  let tagline = slides[i].tagLine;
  //Ajout du chemin de l'image à mon élement img
  imageAdd.src = `./assets/images/slideshow/${image}`;
  // Ajoute un enfant "img" à "banner"
  banner.appendChild(imageAdd);
});

arrowLeft.addEventListener("click", () => {
  console.log("it's left");
});
