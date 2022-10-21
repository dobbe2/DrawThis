
//setting variables for the HTML elements
let generateButton = document.body.querySelector("#generate-button");
let answerDiv = document.body.querySelector("#random-answer");

//creating arrays of random values to use for page
let subjectOne= ["a dinosaur", "a cow", "a race car", "a sun", "a mouse", "a baby", "a basketball", "a gladiator", "an ice cream truck", "a fish", "a spaceship", "a zombie", "a skateboard", "a mushroom", "a plumber"];
let actionOne= ["eating", "fighting", "flying", "tackling", "smelling", "jumping over", "cooking", "wrestling", "tickling", "scratching", "watching a movie with", "coloring", "sleeping with", "singing to", "holding hands with", "studying with", "having a cup of coffee with" ];
let subjectTwo= ["a clown car", "a nerf gun", "a swimming pool", "a jellyfish", "a taco", "a dog", "a stoplight", "a turtle", "a bottle of water", "a school bus", "a monkey", "a banana", "an egg"];

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
    //set class of drawing to .picture
    drawingIdea.setAttribute("class", "picture")
    //add the text value of generatedAnswer to the H3 element
    drawingIdea.innerHTML = `Draw ` + generatedAnswer;
    //create button to search image on google
    let searchButton = document.createElement("button");
    //set ID of button
    searchButton.setAttribute("id", drawingIdea)
    //Set text content of button
    searchButton.textContent = 'Google it';
    //a click event listener for button
    searchButton.addEventListener("click", function() {
        console.log("Button Clicked!");
        //open new tab and search answer on google
        window.open('http://google.com/search?q=' + randomAnswer)
    })

    //add the h3 to the page
    answerDiv.prepend(drawingIdea, searchButton)
    console.log(randomAnswer);
    console.log(generatedAnswer);

})

// a cavas to draw on using fabric.js
const myCanvas = new fabric.Canvas("demoCanvas", {
    width: window.innerWidth - 200,
    height: window.innerHeight - 400,
    backgroundColor: "white",
    isDrawingMode: true,
  });

const toggleDraw = () => {
    myCanvas.set({ isDrawingMode: !myCanvas.get("isDrawingMode") });
};

const createRectangle = () => {
    const rectangle = new fabric.Rect({
        width: 100,
        height: 100,
    });
    myCanvas.add(rectangle);
};

const createTextbox = () => {
    const textbox = new fabric.Textbox("Hakuna Matata", {
        width: 400,
    });
    myCanvas.add(textbox);
};

const deleteObject = () => {
    if(myCanvas.getActiveObject()){ myCanvas.remove(myCanvas.getActiveObject());
    }
}