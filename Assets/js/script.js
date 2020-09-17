// Creating variables to manipulate Element

var main = document.querySelector("#main");
var QuizBoxEl = document.querySelector("#Quiz-Box");
var QuestionEl = document.querySelector("#Question");
var OptionsEl = document.querySelector("#Options");
var QuestionResultEl = document.querySelector("#Question-Result");
var timerDisplay = document.querySelector("#timer");

   
var card = document.createElement("div");
var cardheader = document.createElement("div");
var cardbody = document.createElement("div");
var cardtitle = document.createElement("h5");
var cardtext = document.createElement("p");

var inputgroup = document.createElement("div");
var inputgroupprepend = document.createElement("div");
var inputspan = document.createElement("span");
var input = document.createElement("input");
var inputgroupappend = document.createElement("div");
var inputbutton = document.createElement("button");
var cardtextinput = document.createElement("h5");


var cardfooter = document.createElement("div");
var startbutton = document.createElement("button");
var ulEl = document.createElement("ul");

var gobackbutton = document.createElement("button");
var clearbutton = document.createElement("button");

var index = 0;
var score =0;

var quiz = [{"question":"If we want define style for an unique element, then which css selector will we use ?" , 
            "options" : [ "Id","Text","Class","Name" ],
            "answer" : "Id"},
            {"question":"If we don't want to allow a floating div to the left side of an element, which css property will we use ?" , 
            "options" : [ "Margin","Float","Clear","Padding" ],
            "answer" : "Clear"},
            {"question":"Can we align a Block element by setting the left and right margins ?" , 
            "options" : [ "Yes,we can","Not Possible" ],
            "answer" : "Not Possible"},
            {"question":"If we want to wrap a block of text around an image, which css property will we use ?" , 
            "options" : [ "Wrap","Push","Float","Align" ],
            "answer" : "Float"},
            {"question":"If we want to use a nice looking green dotted border around an image, which css property will we use?" , 
            "options" : [ "border-color","border-decoration","border-style","border-line" ],
            "answer" : "border-style"},
            {"question":"How can we write comment along with CSS code ?" , 
            "options" : [ "/* a comment */","// a comment //","/ a comment /","<' a comment'>" ],
            "answer" : "/* a comment */"}
          ];

var titleQuestion;
var optionlist;

var numQuestions = quiz.length;
var cont = 0;
var totalSeconds = quiz.length * 20;
var interval;
var results = [];
var highscore;
// ***** FUNCTION TO CREATE LANDING PAGE ****//
function landingpage (){    

    //Setting attributes to elmenents 
    card.setAttribute("class","card text-center");
    cardheader.setAttribute("class","card-header");
    cardheader.textContent="CSS Quiz";
    cardbody.setAttribute("class","card-body");
    cardtitle.setAttribute("class","card-title");
    cardtitle.textContent="About this Quiz";
    cardtext.setAttribute("class","card-text");
    cardtext.textContent="In this quiz you will find a list of common important questions on CSS. It will help you to improve your understanding of CSS which is used in cojuntion with HTML code to desing a great looking page. Test your knowlege in CSS and prepar your self.";
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

// ***** FUNCTION TO START QUIZ ****//        
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
          userCredentialsInput();

        }
      },1000);
    console.log("Index: "+ index);
    if (index === 0){
      quizPageGenerator(index); 
    }
        
  }

  // ***** FUNCTION TO CREATE CARD FOR EACH QUESTION ****//
function quizPageGenerator (index){
  footerTime = setTimeout(function(){
    cardfooter.textContent="";
  }, 2000);
  console.log("quiz lenght :" + quiz.length);
  if(index <= (quiz.length-1)){
    // card.appendChild(cardfooter);    
    $("#choice").empty(); 
    console.log("Index: "+ index); // Console log for debugging  

  // Setting attributes to elments of the card
    card.setAttribute("class","card text-center");
    card.setAttribute("id","card");
    cardheader.setAttribute("class","card-header");
    cardheader.textContent= quiz[index].question;
    cardbody.setAttribute("class","card-body");    
    ulEl.setAttribute("class","list-group");
    ulEl.setAttribute("id","choice");    
    cardfooter.setAttribute("class","card-footer text-muted text-left");
    //Appending elements to question card 
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

    // Calling function when option is choice from List
    liClicKevent ();
    
   
  }else {
    index--;
    userCredentialsInput();
    // alert("time to get user credential and show score");
  }
       
}

function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
 }
}

// ***** FUNCTION TO IDENTIFY WHEN USER PICK ANSWER FROM LIST ****//
function liClicKevent (){
  var choiceval;
  // Start process to verify user choice 
  document.querySelectorAll('.list-group-item').forEach(item => {
    item.addEventListener('click', event => {
      choiceval = item.textContent;
      console.log(choiceval);
      // Loop to get correct answer from quiz array
      for (var i=0; i < quiz.length; i++){
        var answerArray = quiz[index].answer;      
        console.log(answerArray);  // Console log for debugging     
        // Comparing the correct answer from quiz array with user choice         
        if (answerArray === choiceval.substring(3)){
          i= quiz.length;    
          index ++;                   
          score = score + 5;                                      
          cardfooter.textContent="Correct!";                            
          console.log("Index: "+ index);   // Console log for debugging           
        }
        else { 
          i= quiz.length;
          index ++;   
          totalSeconds = totalSeconds - 20;
          // if (score !== 0){
          //   score = score - 5;
          // }         
          cardfooter.textContent="Wrong!";
          console.log(index);  // Console log for debugging           
        }
        
      }        
      quizPageGenerator(index);
      console.log(score);
    } )
  });
}
function getSeconds() { 
    return totalSeconds-Math.round();

}


// ***** FUNCTION TO CREATE USER INPUT CARD ****//
function userCredentialsInput(){
  $("#choice").empty();
  // Stop Timer
  clearInterval(interval);

  // Setting attributes and values to all elements used to Credential card  
  highscore = index * quiz.length; 
  card.setAttribute("class","card text-center");
  cardheader.setAttribute("class","card-header");
  cardheader.textContent="JavaScript Quiz";
  cardbody.setAttribute("class","card-body");
  cardtextinput.setAttribute("class","card-title");
  cardtextinput.textContent="Your final score is: " + score +"/"+ highscore;  
  inputgroup.setAttribute("class","input-group mb-3");
  inputgroupprepend.setAttribute("class","input-group-prepend");
  inputspan.setAttribute("class","input-group-text");
  inputspan.textContent="Enter your Initials : ";
  input.setAttribute("type","text");
  input.setAttribute("class","form-control");
  inputgroupappend.setAttribute("class","input-group-append");
  inputbutton.setAttribute("class","btn btn-outline-secondary");
  inputbutton.setAttribute("type","button");
  inputbutton.setAttribute("id","button-addon2");
  inputbutton.textContent="Submit";


//Appending elements to credential input card 

  main.append(card);
  card.appendChild(cardheader);
  card.appendChild(cardbody);   
  cardbody.appendChild(cardtextinput);
  cardbody.appendChild(inputgroup);
  inputgroup.appendChild(inputgroupprepend);
  inputgroupprepend.appendChild(inputspan);
  inputgroup.appendChild(input);
  inputgroup.appendChild(inputgroupappend);
  inputgroupappend.appendChild(inputbutton);
  card.appendChild(cardfooter); 

// Adding click event to button in the final card 

inputbutton.addEventListener("click", function(){
  results.push({"Initials":input.value,"Score":score});
  localStorage.setItem("results",JSON.stringify(results)); 
  localStorage.setItem("highscore",highscore); 
  window.location.href = "./scores.html";
  // window.location.replace("./scores.html");

});

}

// ***** FUNCTION TO CREATE HIGHSCORES PAGE ****//
function HighscoresPages(){

  $("#choice").empty();
// Stop Timer
clearInterval(interval);

// Setting attributes and values to all elements used to Credential card  

card.setAttribute("class","card text-center");
cardheader.setAttribute("class","card-header");
card.setAttribute("id","card");
cardheader.textContent="Highscores";  
cardbody.setAttribute("class","card-body");    
ulEl.setAttribute("class","list-group");
ulEl.setAttribute("id","choice");    
cardfooter.setAttribute("class","card-footer text-muted text-left");
gobackbutton.setAttribute("class","btn btn-primary mr-2");
gobackbutton.textContent="Go Back";
clearbutton.setAttribute("class","btn btn-primary");
clearbutton.textContent="Clear Highscores";

//Appending elements to credential input card 

//Appending elements to question card 
main.append(card);
card.appendChild(cardheader);
card.appendChild(cardbody);
cardbody.appendChild(ulEl);
card.appendChild(cardfooter);
cardfooter.appendChild(gobackbutton);
cardfooter.appendChild(clearbutton);

console.log(results);

if (results !== null){
  for(var k = 0; k < results.length;k++){
    var liEl = document.createElement("li");
    var spanEl = document.createElement("span");
    liEl.setAttribute("class","list-group-item d-flex justify-content-between align-items-center");
    liEl.textContent=results[k].Initials;
    spanEl.setAttribute("class","badge badge-primary badge-pill");
    console.log(highscore);
    spanEl.textContent=results[k].Score + "/" + highscore;
    ulEl.appendChild(liEl);
    liEl.appendChild(spanEl);
  }
}

// Adding action to click event on Go Back button
gobackbutton.addEventListener("click", function(){ 
  // Pointing back to the Main page
  window.location.href = "./index.html";
});

// Adding action to click event on Clear Highscores button
clearbutton.addEventListener("click", function(){ 
  // Clearing Highscores in the card and from localstorage  
  localStorage.clear('results');
  localStorage.clear('highscore');
  $("#choice").empty();
});
}

// Checking if var 'results' exist in the local storage to prevent error 
if (localStorage.getItem("results") !== null){
  results=JSON.parse(localStorage.getItem("results"));
  highscore=localStorage.getItem("highscore");
  
}

console.log(results); // for debbuging purposes
var page = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
console.log(page);

// Identifying loading page  
if (page === "index.html"){
  landingpage();
}
else{
  HighscoresPages();
}