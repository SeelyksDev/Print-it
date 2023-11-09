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

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const banner = document.getElementById("banner");
const paragraphe = document.querySelector("#banner p");
const dots = document.querySelectorAll(".dots span");
const img = document.createElement("img");
let i = 0;

arrowRight.addEventListener("click", () => { // Ajout d'un événement au clic sur la flèche de droite
  i++; // A chaques clics, on ajoute 1 à "i"
  if (i === slides.length) { 
    i = 0; // Si i est égal à 3 (Elements du tableau), on donne la valeur de 0 à "i"
  }
  let image = slides[i].image;
  let tagline = slides[i].tagLine;
  img.src = `./assets/images/slideshow/${image}`; // Ajout de la source de l'image
  img.classList = "banner-img"; // Ajout d'une class à l'image
  paragraphe.innerHTML = tagline; // Insertion de l'HTML pour la tagline 

  dots.forEach((dot, index) => { // Pour chaque éléments du tableau on :
    if (index === i) { // si l'index est egal à i on ajoute la class sinon on la supprime
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
  banner.appendChild(img);
});

arrowLeft.addEventListener("click", () => {
  i--;
  if (i === -1) {
    i = slides.length - 1;
  }
  let image = slides[i].image;
  let tagline = slides[i].tagLine;
  img.src = `./assets/images/slideshow/${image}`;
  img.classList = "banner-img";
  paragraphe.innerHTML = tagline;

  dots.forEach((dot, index) => {
    if (index === i) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
  banner.appendChild(img);
});
