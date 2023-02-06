import { trivia_api } from "./AxiosService.js"
import { Question } from "../Models/Question.js";
import { appState } from "../AppState.js";


class QuestionsService {
  async getTrivia() {
    const res = await trivia_api.get('api.php?amount=10&difficulty=easy')
    console.log(res.data);
    appState.trivia = res.data.results.map(q => new Question(q))

    console.log(appState.trivia);
  }
}

export const questionsService = new QuestionsService()