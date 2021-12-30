// create game object
// create round objects
// create questions objects with properties
const game = [
    {
        questions: [
            {
                label:
                    "Which of the following is commonly used by a child to build a sandcastle?",
                responses: [
                    "An architect",
                    "Reinforced steel beams",
                    "Hired labor",
                    "A bucket",
                ],
                answer: 3,
            },
            {
                label: "What can chameleons change?",
                responses: ["Hairstyle", "color", "Political party", "Underwear"],
                answer: 1,
            },
            {
                label: "A magnet would most likley attract which of the following?",
                responses: ["Metal", "Plastic", "Wood", "The wrong man"],
                answer: 0,
            },
        ],
    },
    {
        questions: [
            {
                label:
                    "Which of the following is commonly used by a child to build a sandcastle?",
                responses: [
                    "An architect",
                    "Reinforced steel beams",
                    "Hired labor",
                    "A bucket",
                ],
                answer: 3,
            },
            {
                label: "What can chameleons change?",
                responses: ["Hairstyle", "color", "Political party", "Underwear"],
                answer: 1,
            },
            {
                label: "A magnet would most likley attract which of the following?",
                responses: ["Metal", "Plastic", "Wood", "The wrong man"],
                answer: 0,
            },
        ],
    },
];

const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-container"));

var questionObject = {};
var limit = 3;
var roundIndex = 0,
    questionIndex = 0;
//get question object
availableQuestion = (roundIndex, questionIndex) => {
    return game[roundIndex].questions[0];
};

//start game
startGame = () => {
    getNewQuestion();
};

getNewQuestion = (roundIndex, questionIndex) => {
    questionObject = availableQuestion(roundIndex, questionIndex);

    question.innerText = questionObject.label;

    choices.forEach((choice, index) => {
        const choiceText = choice.querySelector(".choice-text");
        choice.setAttribute("index", index);
        choiceText.innerText = questionObject.responses[index];
    });
};

choices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        const selectedChoice = e.target;
        alert("choice", selectedChoice);
    });
});

//fire up the game
startGame();
