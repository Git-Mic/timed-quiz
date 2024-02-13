const question = document.getElementById("question");
const selections = Array.from(document.getElementsByClassName("selection-text"));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');

var currentQuestion = {};
var answerAcceptance = false;
var score = 0;
var questionCounter = 0;
var questionBank = [];

//Array of possible questions that will display to the user
var questions = [
    {
        question: "What is the name of Simba's father in The Lion King?",
        choice1: "Scar",
        choice2: "Jafar",
        choice3: "Mufasa",
        choice4: "Rafiki",
        answer: 3
    },
    {
        question: "What was Pinocchio's motivation in the movie Pinocchio?",
        choice1: "To be a real boy",
        choice2: "To be the very best there ever was",
        choice3: "To make it back to Andy's house",
        choice4: "To be the king of the jungle",
        answer: 1 

    },
    {
        question: "Some movie fans consider Die Hard to be what kind of movie?",
        choice1: "A Halloween Movie",
        choice2: "A Christmas Movie",
        choice3: "A Musical",
        choice4: "A Documentary",
        answer: 2
        
    },
    {
        question: "Who directed The Nightmare Before Christmas?",
        choice1: "Mel Gibson",
        choice2: "Quentin Tarantino",
        choice3: "Tim Burton",
        choice4: "Henry Selick",
        answer: 4
    },
    {
       question: "How many times did Lydia have to say Beetlejuice's name to free him?",
       choice1: "5",
       choice2: "3",
       choice3: "10",
       choice4: "2",
       answer: 2
    },
    {
        question: "What does Clark find in the tree in National Lampoon's Christmas Vacation?",
        choice1: "A Squirrel",
        choice2: "Santa Clause",
        choice3: "Mistletoe",
        choice4: "A membership to the jelly of the month club",
        answer: 1
    },
    {
        question: "What famous city does Kevin McCallister accidentally fly to in Home Alone 2?",
        choice1: "Miami",
        choice2: "Atlanta",
        choice3: "NYC",
        choice4: "Los Angeles",
        answer: 3
    },
    {
        question: "What famous line does Arnold say in Terminator 2?",
        choice1: "You want fries with that?",
        choice2: "Merry Christmas, Ya filthy animal!",
        choice3: "I'll be back!",
        choice4: "Get to the chopper!",
        answer: 3
    },
    {
        question: "What is the correct name for the creature in the franchise Alien?",
        choice1: "Xenomorph",
        choice2: "Predator",
        choice3: "Navi",
        choice4: "Demogorgon",
        answer: 1
    },
    {
        question: "This well known actor is famous for roles like Captain Jack Sparrow, Mad Hatter, Edward Scissor Hands, and Sweeney Todd.",
        choice1: "Jake Gyllenhaal",
        choice2: "Heath Ledger",
        choice3: "Johnny Depp",
        choice4: "Leonardo DiCaprio",
        answer: 3
    }


];

// Constants 
const CORRECT_POINTS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    questionBank = [...questions];
    obtainNewQuestion();

};

obtainNewQuestion = () => {

        if(questionBank.length === 0 || questionCounter >= MAX_QUESTIONS){
            localStorage.setItem('latestScore', score);
          //navigates to final page
          return window.location.assign("./finalpage.html");  
        }
    questionCounter++;
    questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;
    const questionIndex = Math.floor(Math.random() * questionBank.length);
    currentQuestion = questionBank[questionIndex];
    question.innerText = currentQuestion.question;

    selections.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice"  + number];
        
    });

    questionBank.splice(questionIndex, 1);

    answerAcceptance = true;
};

selections.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!answerAcceptance) return;

        answerAcceptance = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        
       const applyClass = 
       selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
       
       if(applyClass === 'correct') {
        increaseScore(CORRECT_POINTS);
       }
            selectedChoice.parentElement.classList.add(applyClass);

            setTimeout( () => {
            selectedChoice.parentElement.classList.remove(applyClass);
            obtainNewQuestion();
            }, 1000);
    });
});

increaseScore = num =>{
    score += num;
    scoreText.innerText = score;
};

startGame();