var database;
var nameInput;
var survey;

function setup(){

    database = firebase.database();
    createCanvas(displayWidth - 35, displayHeight)
    form = new Form();
    survey = new Survey();

    //nameInput = createInput("E-mail ID");
    //nameInput.position(displayWidth/2 - 100, 100)
    //submit = createButton("Submit");
    //submit.mousePressed(sendData);
    //q1Y = createButton("Yes");
    //q1Y.position(displayWidth/2 - 150, 200);
    //q1N = createButton("No");
    //q1N.position(displayWidth/2 + 100, 200);

}

function draw(){

    //console.log("Hi")
    form.display();

}

