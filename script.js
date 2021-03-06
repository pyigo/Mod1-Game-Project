// create game object
// create questions objects with properties
/**MODAL JS */
// Get modal element

var modal = document.getElementById('simpleModal');

// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Open modal
function openModal(text) {
    const modalBody = document.getElementById('modal-text');
    modalBody.innerHTML = "";
    modalBody.innerHTML = text;
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
}

// Click outside and close
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}
/**MODAL JS */
const questions = [
    {
        label: "Who is the person responsible for writing code, who knows one or more programming languages (e.g., Java, C++, etc.)?",
        responses: ["An architect", "Project Manager", "Hired labor", "Programmer"],
        answer: 3
    },
    {
        label: "The individual who uses the product after it has been fully developed and marketed.",
        responses: ["Programmer", "End User", "Project Leader", "Project Manager"],
        answer: 1
    },
    {
        label: "A magnet would most likely attract which of the following?",
        responses: ["Metal", "Plastic", "Wood", "The wrong man"],
        answer: 0
    },
    {
        label: "A type of Software Life Cycle Activity which involves obtaining the requirements from the user.",
        responses: ["Feasibility", "Market analysis", "Domain analysis", "Requirement elicitation"],
        answer: 3
    },
    {
        label: "Which toys have been marketed with the phrase “robots in disguise”?",
        responses: ["Bratz Dolls", "Sylvanian Families", "Hatchimals", "Transformers"],
        answer: 3
    },
    {
        label: "What does the word loquacious mean?",
        responses: ["Angry", "Chatty", "Beautiful", "Shy"],
        answer: 1
    },
    {
        label: "Which of these religious observances lasts for the shortest period of time during the calendar year?",
        responses: ["Ramadan", "Diwali", "Lent", "Hanukkah"],
        answer: 1
    },
    {
        label: "At the closest point, which island group is only 50 miles south-east of the coast of Florida?",
        responses: ["Bahamas", "US Virgin Islands", "Turks and Caicos Islands", "Bermuda"],
        answer: 0
    },
    {
        label: "Construction of which of these famous landmarks was completed first?",
        responses: ["Empire State Building", "Royal Albert Hall", "Big Ben Clock Tower", "Eiffel Tower"],
        answer: 2
    },
    {
        label: "On February 22, 1989, what group won the first Grammy award for Best Hard Rock/Metal Performance?",
        responses: ["Metallica", "AC/DC", "Living Colour", " Jethro Tull"],
        answer: 3
    },
    {
        label: "Which of these U.S. Presidents appeared on the television series 'Laugh-In'?",
        responses: ["Lyndon Johnson", "Chatty", "Richard Nixon", "Gerald Ford"],
        answer: 2
    },
    {
        label: "The Earth is approximately how many miles away from the Sun?",
        responses: ["9.3 million", "39 million", "193 million", "93 million"],
        answer: 3
    },
    {
        label: "What insect shorted out an early supercomputer and inspired the term 'computer bug'?",
        responses: ["Moth", "Roach", "Fly", "Japanese beetle"],
        answer: 0
    },
    {
        label: "Before the American colonies switched to the Gregorian calendar, on what date did their new year start?",
        responses: ["March 25", "July 1", "September 25", "December 1"],
        answer: 0
    },
    {
        label: "The person who has complete responsibility for the success of the project, and have accountability to the Stakeholders and Sponsors.",
        responses: ["Project Leader", "Project Manager", "System Analyst", "End User"],
        answer: 1
    },
    {
        label: "A type of Software Life Cycle Activity which involves building the software and converting the design into code.",
        responses: ["Detailed Design", "Interface Design", "Implementation", "Architectural design"],
        answer: 2
    },
    {
        label: "What is the type of Software Life Cycle Activity which involves testing the software in an environment that matches the operational environment. ?",
        responses: ["Acceptance testing", "System testing", "Unit testing", "Regression testing"],
        answer: 1
    }
];

const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));

//disable clicks on choice prefix and choice text
document.getElementById('choice1').addEventListener('click', function (event) {
    event.stopPropagation();
});

var questionObject;
var limit = 3;
var questionIndex = 0;
var scoreIndex = 1;
var timeOut;
//get question object
availableQuestion = (index) => {
    return questions[index];
};

//start game
startGame = () => {
    getNewQuestion(questionIndex);
};

getNewQuestion = (currentQuestionIndex) => {
    console.log("new index:", currentQuestionIndex)
    questionObject = availableQuestion(currentQuestionIndex);

    question.innerText = questionObject.label;

    choices.forEach((choice, index) => {
        //const choiceText = choice.querySelector(".choice-text");
        choice.setAttribute("data-index", index);
        choice.innerText = questionObject.responses[index];
    });
};

setCurrentJackpot = () => {
    const prevScoreDiv = document.querySelector(`[data-score-index="${scoreIndex}"]`);
    prevScoreDiv.classList.remove("score-active");
    scoreIndex += 1;
    if (scoreIndex <= 15) {
        const nextScoreDiv = document.querySelector(`[data-score-index="${scoreIndex}"]`);
        nextScoreDiv.classList.add("score-active");

        if (scoreIndex == 15) {
            //you won
            const message = `
            <img src="https://media0.giphy.com/media/SwmPjBifTij0S5kXMS/giphy.gif?cid=ecf05e47g3v9xaztvqfxsfwrt1l427upkhedxm72hjofzl2a&rid=giphy.gif&ct=s">
            <img src="https://media3.giphy.com/media/5jT0jaNDsM6Ik7X9yq/200w.webp?cid=ecf05e47jz30mi8mbalm23ljdishiasxs7bnbfawj0uredz3&rid=200w.webp&ct=g">
            <p>CONGRATULATIONS!!! You have won $1.000.000!!!</p>
            <p>You are one of the rarest person to make it up here!!!</p>
           <a href="index.html" id="start-button" class="btn"> Play again</a> 
          `

            openModal(message);
        }
    }

    //if 1m then you won...

}

showCorrectAnswer = (index) => {
    const correctAnswer = document.querySelector(`[data-index="${index}"]`);
    // display correct answer if wrong answer selected
    correctAnswer.parentElement.classList.add("choice-container-correct")
}

removeCorrectAnswerClass = (index) => {
    const correctAnswer = document.querySelector(`[data-index="${index}"]`)
    // display correct answer if wrong answer selected
    correctAnswer.parentElement.classList.remove("choice-container-correct")
}

endGame = () => {

    const message = `<img src="https://media1.giphy.com/media/UHEqxUp1SLI3nqbCuB/200.webp?                  cid=ecf05e47kgsue0za9co99vmxzobo44avllb3elvmc7prdegd&rid=200.webp&ct=g">
                    <p>Oops! You lost!!!</p>
                    <p>You will be lucky next time!!!</p>
                    <a href="index.html" id="start-button" class="btn">New game</a> 
                     `
    openModal(message);
    //stop timeout
    clearTimeout(timeOut);
}

choices.forEach((choice) => {
    choice.addEventListener("click", (event) => {

        const selectedChoice = event.target;
        const selectedIndex = selectedChoice.dataset['index'];
        console.log("You have selected:", selectedChoice.innerText)
        console.log("Your response index:", selectedIndex)
        console.log("Correct answer:", questionObject.answer)

        //compare index to answer value ==> question.answer
        const isCorrect = selectedIndex == questionObject.answer;
        if (isCorrect) {
            // change color to green if correct answer
            selectedChoice.parentElement.classList.add("choice-container-correct")

            //move jackpot up.
            setCurrentJackpot();

        } else {

            //change color to red if wrong answer
            selectedChoice.parentElement.classList.add("choice-container-wrong")
            showCorrectAnswer(questionObject.answer)

            limit--;
            if (limit == 0) {
                //end game
                endGame();
            }
        }


        timeOut = setTimeout(() => {
            console.log("isCorrect", isCorrect);
            console.log("parent", selectedChoice);
            if (isCorrect) {
                selectedChoice.parentElement.classList.remove("choice-container-correct")
            } else {
                selectedChoice.parentElement.classList.remove("choice-container-wrong")

                removeCorrectAnswerClass(questionObject.answer);
            }

            //remove wrong and correct class 
            questionIndex += 1;
            getNewQuestion(questionIndex)
        }, 1000)
    });
});


//fire up the game
startGame();
