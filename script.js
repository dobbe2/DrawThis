//setting variables for the HTML elements
let generateButton = document.body.querySelector("#generate-button");
let answerDiv = document.body.querySelector("#random-answer");

//creating arrays of random values to use for page
let subjectOne= ["dinosaur", "cow", "race car", "sun", "mouse"];
let actionOne= ["eat", "fight", "fly", "tackle", "smell", "jump"];
let subjectTwo= ["car", "nerf gun", "swimming pool", "jelly"];

let generatedAnswer = [];
//creating a listener for our random generator
generateButton.addEventListener("click", function(){
    generatedAnswer = [];
    let randomAnswer = subjectOne[Math.floor(Math.random() * subjectOne.length)] + ` ` + actionOne[Math.floor(Math.random() * actionOne.length)] + ` ` + subjectTwo[Math.floor(Math.random() * subjectTwo.length)];
    generatedAnswer.push(randomAnswer);
    console.log(randomAnswer);
    console.log(generatedAnswer);
    // randomAnswer = actionOne[Math.floor(Math.random() * actionOne.length)];
    // generatedAnswer.push(randomAnswer)
    // randomAnswer = subjectTwo[Math.floor(Math.random() * subjectTwo.length)];
    // generatedAnswer.push(randomAnswer);

})