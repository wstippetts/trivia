export class Question {
  constructor(data) {

    this.difficulty = data.difficulty
    this.category = data.category
    this.answer = data.correct_answer
    this.wrong = data.incorrect_answers
    this.question = data.question
    this.type = data.type


  }

  get Trivia4() {
    return /*HTML*/`
    <div class="col-12">
    <div class="span">${this.category}</div>
    <div class="span">${this.question}</div>
    <div class="row">
      <button>${this.wrong[1]}</button>
      <button>${this.wrong[2]}</button>
      <button>${this.wrong[0]}</button>
      <button>${this.answer}</button>
    </div>
  </div>
    `
  }
  get Trivia3() {
    return /*HTML*/`
    <div class="col-12">
    <div class="span">${this.category}</div>
    <div class="span">${this.question}</div>
    <div class="row">
      <button>${this.wrong[1]}</button>
      <button>${this.wrong[0]}</button>
      <button>${this.answer}</button>
    </div>
  </div>
    `
  }
  get Trivia2() {
    return /*HTML*/`
    <div class="col-12">
    <div class="span">${this.category}</div>
    <div class="span">${this.question}</div>
    <div class="row">
      <button>${this.wrong}</button>
      <button>${this.answer}</button>
    </div>
  </div>
    `
  }
}