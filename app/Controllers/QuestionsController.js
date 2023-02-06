import { appState } from "../AppState.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"
import { questionsService } from "../Services/QuestionsService.js";


function _drawQuestion() {
  let template = ''

  appState.trivia.forEach(q => {

    switch (q.wrong.length) {
      case 3:
        template += q.Trivia4

      case 2:
        template += q.Trivia3

      default:
        template += q.Trivia2
        break;
    }
  })
  setHTML('trivia', template)
}

export class QuestionsController {

  constructor() {
    appState.on('trivia', _drawQuestion)
    this.getTrivia()
  }
  async getTrivia() {
    try {
      await questionsService.getTrivia()
    } catch (error) {
      Pop.error(error)

    }
  }
}