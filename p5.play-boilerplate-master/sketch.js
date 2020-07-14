let input, button, greeting, radio, email, mail, playercount = 0,
index;

function setup(){
    createCanvas(600, 600);

    input = createInput();
    input.position(670, 255);
    email = createInput();
    email.position(670, 155);

    text = createElement('h1', "Lets Do A Survey On Our School Students");
    text.position(600,5);

    question1 = createElement('h3', "Q1. Do you think we need to have free school meals in the canteen for kids who are very poor?")
    question1.position(400,300)
    radio = createRadio();
    radio.position(600,360)
    radio.option('yes');
    radio.option('No');

    question2 = createElement('h3', "Q2. Will you be willing to contrubite a small amount every month for such a program?")
    question2.position(400,390)
    radio1 = createRadio();
    radio1.position(600,450)
    radio1.option('yes');
    radio1.option('No');

    question3 = createElement('h3', "Q3. How much are you willing to contribute?")
    question3.position(400,490)
    radio2 = createRadio();
    radio2.position(600,550)
    radio2.option('yes');
    radio2.option('No');

    button = createButton('submit');
    button.position(700,600)
    button.mousePressed(greet);

    greeting = createElement('h2', ' Type your name in the input box ')
    greeting.position(600,105);

    mail = createElement('h2', 'Put your email id in the input box below' );
    mail.position(600,200);

    textAlign(CENTER);
    textSize(50);
}