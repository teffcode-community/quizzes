import { quizzes, images, color } from "./utils.js"

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

  getImageByCard(quizTechnology){
    const packageImages = images.filter(image => {

      if(image.categories.includes(quizTechnology)){
        return image;
      }
    });

    return packageImages
  }
  
  setColorByQuizzTechnology(quizTechnology){
    switch (quizTechnology) {
      case this.javascript:
        this.cardContainer.getElementsByTagName("p")[0].style.backgroundColor = color.SHALIMARA;
        break;
      case this.css:
        this.cardContainer.getElementsByTagName("p")[0].style.backgroundColor = color.CARNATION_PINK;
        break;
      default:
        this.cardContainer.getElementsByTagName("p")[0].style.backgroundColor = color.AQUAMARINE;
        break;
    }
  }

  createCards() {
    quizzes.forEach(quiz => {
      const imagesByCategoryQuiz = this.getImageByCard(quiz.technology);
      const randomImage = Math.floor(Math.random() * imagesByCategoryQuiz.length);
      this.cardContainer = this.cardsContainer.appendChild(this.card.cloneNode(true))
      this.cardContainer.setAttribute("href", quiz.url)
      this.cardContainer.setAttribute("target", "_blank")
      this.setAttributes(this.cardContainer.appendChild(this.image.cloneNode(true)), {"src": imagesByCategoryQuiz[randomImage].src, "alt": imagesByCategoryQuiz[randomImage].alt})
      this.cardContainer.appendChild(this.label.cloneNode(true)).innerHTML = quiz.technology
      this.cardContainer.appendChild(this.title.cloneNode(true)).innerHTML = quiz.name
      this.cardContainer.appendChild(this.date.cloneNode(true)).innerHTML = quiz.date
      this.setColorByQuizzTechnology(quiz.technology);
    })
  }
}

new Quizzes()
