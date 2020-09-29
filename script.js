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
    //empty the array for our next generated answer
    generatedAnswer = [];
    //gran a random value from all 3 arrays and combine them into 1 long string
    let randomAnswer = subjectOne[Math.floor(Math.random() * subjectOne.length)] + ` ` + actionOne[Math.floor(Math.random() * actionOne.length)] + ` ` + subjectTwo[Math.floor(Math.random() * subjectTwo.length)];
    //push the random anwswer to the generated answer array;
    generatedAnswer.push(randomAnswer);
    //create an h3 element
    let drawingIdea = document.createElement("h3");
    //add the text value of generatedAnswer to the H3 element
    drawingIdea.innerHTML = `Draw a ` + generatedAnswer;
    //add the h3 to the page
    answerDiv.prepend(drawingIdea)
    console.log(randomAnswer);
    console.log(generatedAnswer);

})