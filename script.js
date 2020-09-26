//setting variables for the HTML elements
let generateButton = document.body.querySelector("#generate-button");
let answerDiv = document.body.querySelector("#random-answer");

//creating arrays of random values to use for page
let subjectOne= ["dinosaur", "cow", "race car", "sun", "mouse", "baby", "basketball", "gladiator", "ice cream truck", "fish"];
let actionOne= ["eating", "fighting", "flying", "tackling", "smelling", "jumping", "cooking", "wrestling", "tickling", "scratching", "watching a movie with", ];
let subjectTwo= ["a clown car", "a nerf gun", "a swimming pool", "a jellyfish", "a taco", "a dog", "a stoplight"];

let generatedAnswer = [];
//creating a listener for our random generator
generateButton.addEventListener("click", function(){
    generatedAnswer = [];
    let randomAnswer = subjectOne[Math.floor(Math.random() * subjectOne.length)] + ` ` + actionOne[Math.floor(Math.random() * actionOne.length)] + ` ` + subjectTwo[Math.floor(Math.random() * subjectTwo.length)];
    generatedAnswer.push(randomAnswer);
    let drawingIdea = document.createElement("h3");
    drawingIdea.innerHTML = `draw a ` + generatedAnswer;
    answerDiv.append(drawingIdea)
    // alert(`draw a ` + generatedAnswer + ` if you can` )
    console.log(randomAnswer);
    console.log(generatedAnswer);
    // randomAnswer = actionOne[Math.floor(Math.random() * actionOne.length)];
    // generatedAnswer.push(randomAnswer)
    // randomAnswer = subjectTwo[Math.floor(Math.random() * subjectTwo.length)];
    // generatedAnswer.push(randomAnswer);

})