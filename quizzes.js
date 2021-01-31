import { quizzes, images } from "./utils.js"

class Quizzes {
  constructor() {
    this.cardsContainer = document.querySelector(".quizzes-main")
    this.card = document.createElement("a")
    this.image = document.createElement("img")
    this.label = document.createElement("p")
    this.title = document.createElement("h2")
    this.date = document.createElement("span")
    
    this.javascript = "JavaScript"
    this.css = "CSS"

    this.createCards()
  }
  
  setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

  createCards() {
    quizzes.forEach(quiz => {
      const randomImage = Math.floor(Math.random() * images.length);

      this.cardContainer = this.cardsContainer.appendChild(this.card.cloneNode(true))
      this.cardContainer.setAttribute("href", quiz.url)
      this.cardContainer.setAttribute("target", "_blank")
      this.setAttributes(this.cardContainer.appendChild(this.image.cloneNode(true)), {"src": images[randomImage], "alt": "Ilustración de una persona haciendo un quíz"})
      this.cardContainer.appendChild(this.label.cloneNode(true)).innerHTML = quiz.technology
      this.cardContainer.appendChild(this.title.cloneNode(true)).innerHTML = quiz.name
      this.cardContainer.appendChild(this.date.cloneNode(true)).innerHTML = quiz.date

      if (quiz.technology === this.javascript) {
        this.cardContainer.getElementsByTagName("p")[0].style.backgroundColor = "#FDFFBC"
      } else if (quiz.technology === this.css) {
        this.cardContainer.getElementsByTagName("p")[0].style.backgroundColor = "#FFE3DE"
      } else {
        this.cardContainer.getElementsByTagName("p")[0].style.backgroundColor = "#C6FCED"
      }
    })
  }
}

new Quizzes()
