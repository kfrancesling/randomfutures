// we define answers, add your on here :)
var answers = ["It is certain", 
"It is decidedly so", 
"Without a doubt", 
];

// Retriving the divs from the HTML document in variables 
window.onload = function() {
var eight = document.getElementById("eight");
var answer = document.getElementById("answer");
var eightball = document.getElementById("eight-ball");
var question = document.getElementById("question");

// Simple answers array
eightball.addEventListener("click", function() {
if (question.value.length < 1) {
alert('Enter a question!'); // Alert to the user if they don't ask a question! 
} else {
eight.innerText = ""; // remove the text in the inner div to nothing
var num = Math.floor(Math.random() * Math.floor(answers.length)); // randomly selecting one of the answers 
answer.innerText = answers[num]; // displaying the text inside the answer div
}
});
};

