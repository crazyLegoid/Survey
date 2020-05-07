class Form{

    constructor() {

        this.input = createInput("EmailID");
        this.button = createButton('Start');
        this.greeting = createElement('h2');
        this.title = createElement('h2');
        this.reset = createButton('Reset');
        this.question1 = null;
        this.question2 = null;
        this.question3 = null;

    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }

    display(){

        this.title.html("A Survey! Brought to you by Arya!");
        this.title.position(displayWidth/2 - 150, 0);
    
        this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
        this.button.position(displayWidth/2 + 30, displayHeight/2);
    
        this.reset.position(displayWidth - 100, 20);

        this.button.mousePressed(function(){

            form.hide();
            survey.display();
            form.update();

        });

        this.reset.mousePressed(function(){

            form.question1 = null;
            form.question2 = null;
            form.question3 = null;

            form.update();

        })

    }

    update(){

        database.ref('EmailIDs').set({

            Email : form.input.value(),
            question1 : this.question1,
            question2 : this.question2,
            question3 : this.question3

        })

    }

}