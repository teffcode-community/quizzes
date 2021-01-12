class Quizzes {
  constructor() {
    this.quizzes = [
      {
        technology: "JavaScript",
        name: "Objects",
        date: "1 Jan. 2021",
        url: "/",
        imageUrl: "https://images.pexels.com/photos/5601091/pexels-photo-5601091.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      }
    ]

    this.cardsContainer = document.querySelector(".quizzes-main")
    this.card = document.createElement("a")
    this.image = document.createElement("img")
    this.color = document.createElement("div")
    this.label = document.createElement("p")
    this.title = document.createElement("h2")
    this.date = document.createElement("span")

    this.createCards()
  }

  createCards() {
    this.quizzes.map((quiz, index) => {
      this.cardsContainer.appendChild(this.card)
      this.cardContainer = this.cardsContainer.getElementsByTagName("a")[index]
      this.cardContainer.appendChild(this.image).setAttribute("src", quiz.imageUrl)
      this.cardContainer.appendChild(this.color)
      this.cardContainer.appendChild(this.label).innerHTML = quiz.technology
      this.cardContainer.appendChild(this.title).innerHTML = quiz.name
      this.cardContainer.appendChild(this.date).innerHTML = quiz.date
    })
  }
}

new Quizzes()
