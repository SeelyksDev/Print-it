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
const banner = document.getElementById("banner");
const paragraphe = document.querySelector("#banner p");
const dots = document.querySelectorAll('.dots span')
const img = document.createElement("img");
let i = 0;

arrowRight.addEventListener("click", () => {
  i++;
  let image = slides[i].image;
  let tagline = slides[i].tagLine;
  img.src = `./assets/images/slideshow/${image}`;
  img.classList = "banner-img";
  paragraphe.innerHTML = tagline;
  dots[i].classList.add('dot_selected')
  dots[i - 1].classList.remove('dot_selected')
  banner.appendChild(img);
});

arrowLeft.addEventListener("click", () => {
  i--;
  let image = slides[i].image;
  let tagline = slides[i].tagLine;
  img.src = `./assets/images/slideshow/${image}`;
  img.classList = "banner-img";
  paragraphe.innerHTML = tagline;
  dots[i].classList.add('dot_selected')
  dots[i + 1].classList.remove('dot_selected')
  banner.appendChild(img);
});
