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
let i = 0;

arrowRight.addEventListener("click", () => {
  const banner = document.getElementById("banner");
  const imgRight = document.createElement("img");
  const paragrapheRight = document.querySelector("#banner p");
  i++;
  let image = slides[i].image;
  let tagline = slides[i].tagLine;
  imgRight.src = `./assets/images/slideshow/${image}`;
  imgRight.classList = "banner-img";
  paragrapheRight.innerHTML = tagline;
  banner.appendChild(imgRight);
});

arrowLeft.addEventListener("click", () => {
  const banner = document.getElementById("banner");
  const imgLeft = document.createElement("img");
  const paragrapheLeft = document.querySelector("#banner p");
  i--;
  let image = slides[i].image;
  let tagline = slides[i].tagLine;
  imgLeft.src = `./assets/images/slideshow/${image}`;
  imgLeft.classList = "banner-img";
  paragrapheLeft.innerHTML = tagline;
  banner.appendChild(imgLeft);
});
