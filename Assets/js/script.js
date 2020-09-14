var main = document.querySelector("#main");
var QuizBoxEl = document.querySelector("#Quiz-Box");
var QuestionEl = document.querySelector("#Question");
var OptionsEl = document.querySelector("#Options");
var QuestionResultEl = document.querySelector("#Question-Result");
var timerDisplay = document.querySelector("#timer");

// Creating variables to be able to generate DOM element   
var card = document.createElement("div");
var cardheader = document.createElement("div");
var cardbody = document.createElement("div");
var cardtitle = document.createElement("h5");
var cardtext = document.createElement("p");
var startbutton = document.createElement("button");


var quiz = [{"question":"What is the highest montain in the world" , 
            "options" : [ "chimborazo","everest","k2" ],
            "answer" : "everest"},
            {"question":"What is the fatest car in the world" , 
            "options" : [ "ferrari","lambo","corvette" ],
            "answer" : "lambo"}];



var numQuestions = quiz.length;
var cont = 0;
var totalSeconds = quiz.length * 20;
var interval;

function landingpage (){

    

    //Setting attributes to elmenents 
    card.setAttribute("class","card text-center");
    cardheader.setAttribute("class","card-header");
    cardheader.textContent="JavaScript Quiz";
    cardbody.setAttribute("class","card-body");
    cardtitle.setAttribute("class","card-title");
    cardtitle.textContent="The Test";
    cardtext.setAttribute("class","card-text");
    cardtext.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum provident odio et libero soluta adipisci nulla, totam porro possimus doloremque non omnis! Quisquam voluptates vitae quas nam. Iusto, aspernatur repellat";
    startbutton.setAttribute("class","btn btn-primary");
    startbutton.textContent="Start Quiz";

    //Appending elements to index page 
    main.append(card);
    card.appendChild(cardheader);
    card.appendChild(cardbody);
    cardbody.appendChild(cardtitle);
    cardbody.appendChild(cardtext);
    cardbody.appendChild(startbutton);  
    
    startbutton.addEventListener("click",startquiz);


   

}
        
function startquiz(){
    // Hiding landing page to star quiz
    card.style.display = "none";
    
    // Starting Interval
    interval = setInterval(function (){        
        // Display countdown time  
        timerDisplay.textContent="Time: " + totalSeconds;
        totalSeconds--;
        
        if (totalSeconds < 0){
          alert("Time out!");
          clearInterval(interval);
        }
      },1000);

    // for (i in quiz) {
    //     var titleQuestion = document.createElement("h2");
    //     titleQuestion.textContent=quiz[i].question;
    //     console.log(titleQuestion);
    //     QuizBoxEl.appendChild(titleQuestion);
        
    //     for (j in quiz[i].options) {
    //       var optionlist = document.createElement("li");
    //       optionlist.textContent=quiz[i].options[j];
    //       OptionsEl.appendChild(optionlist);  
    //       console.log(optionlist);
    //       console.log(quiz[i].options[j]);
    //     }
    // }
}      

function getSeconds() { 
    return totalSeconds-Math.round();

}

landingpage();
