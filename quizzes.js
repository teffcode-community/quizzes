import { quizzes, images, color } from "./utils.js";

class Quizzes {
  constructor() {
    this.cardsContainer = document.querySelector(".quizzes-main");
    this.navContainer = document.querySelector(".nav");
    this.card = document.createElement("a");
    this.image = document.createElement("img");
    this.label = document.createElement("p");
    this.title = document.createElement("h2");
    this.date = document.createElement("span");
    this.nav = document.createElement("nav");
    this.li = document.createElement("li");

    this.filter = [];

    this.javascript = "JavaScript";
    this.css = "CSS";
  }

  setAttributes(el, attrs) {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

  getImageByCard(quizTechnology) {
    const packageImages = images.filter((image) => {
      if (image.categories.includes(quizTechnology)) {
        return image;
      }
    });

    return packageImages;
  }

  setColorByQuizzTechnology(quizTechnology) {
    switch (quizTechnology) {
      case this.javascript:
        this.cardContainer.getElementsByTagName("p")[0].style.backgroundColor =
          color.SHALIMARA;
        break;
      case this.css:
        this.cardContainer.getElementsByTagName("p")[0].style.backgroundColor =
          color.CARNATION_PINK;
        break;
      default:
        this.cardContainer.getElementsByTagName("p")[0].style.backgroundColor =
          color.AQUAMARINE;
        break;
    }
  }

  createCards() {
    this.filter.forEach((quiz) => {
      const imagesByCategoryQuiz = this.getImageByCard(quiz.technology);
      const randomImage = Math.floor(
        Math.random() * imagesByCategoryQuiz.length
      );
      this.cardContainer = this.cardsContainer.appendChild(
        this.card.cloneNode(true)
      );
      this.cardContainer.setAttribute("href", quiz.url);
      this.cardContainer.setAttribute("target", "_blank");
      this.setAttributes(
        this.cardContainer.appendChild(this.image.cloneNode(true)),
        {
          src: imagesByCategoryQuiz[randomImage].src,
          alt: imagesByCategoryQuiz[randomImage].alt,
        }
      );
      this.cardContainer.appendChild(this.label.cloneNode(true)).innerHTML =
        quiz.technology;
      this.cardContainer.appendChild(this.title.cloneNode(true)).innerHTML =
        quiz.name;
      this.cardContainer.appendChild(this.date.cloneNode(true)).innerHTML =
        quiz.date;
      this.setColorByQuizzTechnology(quiz.technology);
    });
  }

  //generate the 'li elements inside nav
  createnav(type) {
    this.navContainer.appendChild(this.li.cloneNode(true)).innerHTML = type;
  }
  //remove the childs for actualizate the cards
  removeCards() {
    while (this.cardsContainer.firstChild) {
      this.cardsContainer.removeChild(this.cardsContainer.firstChild);
    }
  }
}
const input = new Quizzes();

//generate the diferents 'li' inside 'nav'
input.createnav("CSS");
input.createnav("JavaScript");
input.createnav("UI");

//get the 'li' elements for create event listener
const liSelect = document.getElementsByTagName("li");
liSelect.item(addEventListener("click", create));
//funtion call when you click in the 'li'
function create(e) {
  input.filter = quizzes.filter((el) => el.technology == e.target.innerHTML);
  input.removeCards();
  input.createCards();
}

export default quizzes;
