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
var cardfooter = document.createElement("div");
var startbutton = document.createElement("button");
var ulEl = document.createElement("ul");

var index = 0;
var score =0;



var quiz = [{"question":"What is the highest montain in the world" , 
            "options" : [ "chimborazo","everest","k2" ],
            "answer" : "everest"},
            {"question":"What is the fatest car in the world" , 
            "options" : [ "ferrari","lambo","corvette" ],
            "answer" : "lambo"}];

var titleQuestion;
var optionlist;


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
    

    quizPageGenerator(index); 
    var choiceval;
    document.querySelectorAll('.list-group-item').forEach(item => {
      item.addEventListener('click', event => {
        choiceval = item.textContent;
        console.log(choiceval);
        for (var i=0; i < quiz.length; i++){
          var answerArray = quiz[i].answer;                    
          if (answerArray === choiceval.substring(3)){
            i= quiz.length;    
            index ++;        
            score = score + 5;            
            cardfooter.textContent="Correct!";
            console.log(index);
            quizPageGenerator(index);
          }
          else { 
            i= quiz.length;
            index ++;   
            if (score !== 0){
              score = score - 5;
            }         
            cardfooter.textContent="Wrong!";
            console.log(index);
            quizPageGenerator(index);
          }
        }
      } )
    });
       
  }

function quizPageGenerator (index){

  
    $("#choice").empty(); 
    
    card.setAttribute("class","card text-center");
    card.setAttribute("id","#card");
    cardheader.setAttribute("class","card-header");
    cardheader.textContent= quiz[index].question;
    cardbody.setAttribute("class","card-body");    
    ulEl.setAttribute("class","list-group");
    ulEl.setAttribute("id","choice");    
    cardfooter.setAttribute("class","card-footer text-muted");
    main.append(card);
    card.appendChild(cardheader);
    card.appendChild(cardbody);
    cardbody.appendChild(ulEl);
    card.appendChild(cardfooter);
    for (var j = 0; j < quiz[index].options.length;j++){
      var liEl = document.createElement("li");
      liEl.setAttribute("class","list-group-item list-group-item-action text-left");
      liEl.setAttribute("id",j);
      liEl.setAttribute("data-toggle","list");
      liEl.textContent= (j + 1) + ". " + quiz[index].options[j];
      ulEl.appendChild(liEl);
      console.log(j);
    }
    
    cardtitle.style.display = "none";
    cardtext.style.display = "none";
    startbutton.style.display = "none";
    ulEl.style.display="block";
    card.style.display = "block";
       
}

function getSeconds() { 
    return totalSeconds-Math.round();

}

landingpage();
// quizPageGenerator(index);
