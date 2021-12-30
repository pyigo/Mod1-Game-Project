// create game object
// create round objects
// create questions objects with properties
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
        label: "Which of the following men does not have a chemical element named for him?",
        responses: ["Niels Bohr", "Albert Einstein", "Isaac Newton", "Enrico Fermi"],
        answer: 2
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
    },
    {
        label: "What best-selling author was born Howard Allen O'Brien?",
        responses: ["Danielle Steel", "Anne Rice", "J.K. Rowling", "Toni Morrison"],
        answer: 1
    },
    {
        label: "According to the United Nations, in what year was the world's population half of its present total?",
        responses: ["1950", "1960", "1940", "1970"],
        answer: 1
    },
    {
        label: "People who have a marked physical reaction to beautiful art are said to suffer from what syndrome?",
        responses: ["Jerusalem Syndrome", "Proust Syndrome", "Stendhal's Syndrome", "Beckett's Syndrome"],
        answer: 2
    }
];

const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));

//disable clicks on chocie prefix and choice text
document.getElementById('choice1').addEventListener('click', function (event) {
    event.stopPropagation();
});

var questionObject;
var limit = 3;
var questionIndex = 0;
//get question object
availableQuestion = (index) => {
    return questions[index];
};

//start game
startGame = () => {
    getNewQuestion(questionIndex);
};

getNewQuestion = (questionIndex) => {
    questionObject = availableQuestion(questionIndex);

    question.innerText = questionObject.label;

    choices.forEach((choice, index) => {
        //const choiceText = choice.querySelector(".choice-text");
        choice.setAttribute("data-index", index);
        choice.innerText = questionObject.responses[index];
    });
};

choices.forEach((choice) => {
    choice.addEventListener("click", (event) => {

        const selectedChoice = event.target;
        const selectedIndex = selectedChoice.dataset['index'];
        console.log("You have selected:", selectedChoice.innerText)
        console.log("tour response index:", selectedIndex)
        console.log("correct answer:", questionObject.answer)

        //compare indec to answer value ==> question.answer
        if (selectedIndex == questionObject.answer) {
            // chnage color to green
            selectedChoice.parentElement.classList.add("choice-container-correct")
        } else {

            //change color to red
            selectedChoice.parentElement.classList.add("choice-container-wrong")
        }


    });
});

//fire up the game
startGame();
