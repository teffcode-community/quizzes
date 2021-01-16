import { quizzes } from "./utils.js"

class Quizzes {
  constructor() {
    this.cardsContainer = document.querySelector(".quizzes-main")
    this.card = document.createElement("a")
    this.image = document.createElement("img")
    this.color = document.createElement("div")
    this.label = document.createElement("p")
    this.title = document.createElement("h2")
    this.date = document.createElement("span")
    
    this.javascript = "JavaScript"
    this.css = "CSS"

    this.createCards()
  }

  createCards() {
    quizzes.forEach(quiz => {
      this.cardContainer = this.cardsContainer.appendChild(this.card.cloneNode(true))
      this.cardContainer.setAttribute("href", quiz.url)
      this.cardContainer.setAttribute("target", "_blank")
      this.cardContainer.appendChild(this.image.cloneNode(true)).setAttribute("src", quiz.imageUrl)
      this.cardContainer.appendChild(this.image.cloneNode(true)).setAttribute("alt", quiz.imageAlt)
      this.cardContainer.appendChild(this.label.cloneNode(true)).innerHTML = quiz.technology
      this.cardContainer.appendChild(this.title.cloneNode(true)).innerHTML = quiz.name
      this.cardContainer.appendChild(this.date.cloneNode(true)).innerHTML = quiz.date

      let color = this.cardContainer.appendChild(this.color.cloneNode(true))

      if (quiz.technology === this.javascript) {
        color.classList.remove("css-color")
        color.classList.add("javascript-color")
      } else {
        color.classList.remove("javascript-color")
        color.classList.add("css-color")
      }
    })
  }
}

new Quizzes()
