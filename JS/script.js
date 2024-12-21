import { Quiz } from "./quiz.js";
import { Question } from "./questions.js";
const startQuiz=document.querySelector('#startQuiz');
const categoryMenu=document.querySelector('#categoryMenu');
const difficultyOptions=document.querySelector('#difficultyOptions');
const questionsNumber=document.querySelector('#questionsNumber');
const quizOptions=document.querySelector('#quizOptions');
export let AllQusetions
export let myQuiz;


startQuiz.addEventListener('click',async function(){
     myQuiz= new Quiz(categoryMenu.value,difficultyOptions.value,questionsNumber.value)
    AllQusetions= await myQuiz.getQuistions()
    let question=new Question(0);
    quizOptions.classList.replace('d-flex','d-none')
    question.display()
})