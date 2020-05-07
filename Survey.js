class Survey{

    constructor(){

        this.question1 = createElement('h3');
        this.question2 = createElement('h3');
        this.question3 = createElement('h3');
        this.q1opt1 = createButton("Yes");
        this.q1opt2 = createButton("No")
        this.q2opt1 = createButton("Every Month");
        this.q2opt2 = createButton("All at a time");
        this.q3opt1 = createButton("1000");
        this.q3opt2 = createButton("2000");
        this.q3opt3 = createButton("2500");
        this.q3opt4 = createButton("More than above options");

    }

    display(){

        this.question1.html("Q1. Do you think that India has the potential of developing the vaccine for the Corona Virus before the WHO?");
        this.question1.position(displayWidth/2 - 400, 150);

        this.question2.html("Q2. Would you pay a little amount every month or be paying all at the same time for the research and development of a cure?");
        this.question2.position(displayWidth/2 - 400, 300);

        this.question3.html("Q3. How much will you be willing to pay?");
        this.question3.position(displayWidth/2 - 400, 450);

        this.q1opt1.position(displayWidth/2 - 200, 250);

        this.q1opt2.position(displayWidth/2 + 200, 250);

        this.q2opt1.position(displayWidth/2 - 200, 400);

        this.q2opt2.position(displayWidth/2 + 200, 400);

        this.q3opt1.position(displayWidth/2 - 200, 550);

        this.q3opt2.position(displayWidth/2 - 200, 600);

        this.q3opt3.position(displayWidth/2 - 200, 650);

        this.q3opt4.position(displayWidth/2 - 200, 700);

        this.q1opt1.mousePressed(function(){
    
            form.question1 = 1;
            form.update();
    
        });
    
        this.q1opt2.mousePressed(function(){
    
            form.question1 = 0;
            form.update();
    
        });
    
        this.q2opt1.mousePressed(function(){
    
            form.question2 = 1;
            form.update();
    
        });
    
        this.q2opt2.mousePressed(function(){
    
            form.question2 = 0;
            form.update();
    
        });
    
        this.q3opt1.mousePressed(function(){
    
            form.question3 = 0;
            form.update();
    
        });
    
        this.q3opt2.mousePressed(function(){
    
            form.question3 = 1;
            form.update();
    
        });
    
    
        this.q3opt3.mousePressed(function(){
    
            form.question3 = 3;
            form.update();
    
        });
    
        this.q3opt4.mousePressed(function(){
    
            form.question3 = 4;
            form.update();
    
        });

    }   

}
