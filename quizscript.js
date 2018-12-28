(function(){
 // pos is position of where the user in the test or which question they're up to
 var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
 // this is a multidimensional array with questions and answers inside
 var questions = [
                  ["How many states are in the U.S?", "51 states", "49 states", "50 states", "C"],
                  ["Who is the strongest?", "Superman", "Black Panther", "One Punch Man", "C"],
                  ["What is 11 mod 3?", "4", "2", "3", "B"],
                  ["Google was founded in what year?", "2013", "1998","1993", "B"],
                  ["The founder of Amazon is", "Jeff Bezos", "Elon Musk","Tarzan", "A"],
                  ["Which of these are NOT a vegetable?", "Spinach", "Kale","Tomatoe", "C"],
                  ["How many countries are in the world?", "195", "250","324", "A"],
                  ["What is 8*8?", "64", "16","88", "A"],
                  ["Did you enjoy this quiz?", "Yes", "Of course", "Just pick the first choice", "A"]
                  ];
 // this get function is short for the getElementById function
 function get(x){
 return document.getElementById(x);
 }
 
 function renderQuestion(){
 test = get("test");
 if(pos >= questions.length){
 test.innerHTML = "<h2 id='headingz'>You got "+correct+" of "+questions.length+" questions correct!!!</h2>";
 
 get("test_status").innerHTML = "Test completed";
 
 //shows restart button
 test.innerHTML += "<button id='start_over_button' onclick= 'ss()'>Start Over</button>";
 
 // stops rest of renderQuestion function running when test is completed
 return false;
 }
 get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
 question = questions[pos][0];
 chA = questions[pos][1];
 chB = questions[pos][2];
 chC = questions[pos][3];
 chD = questions[pos][4];
 chE = questions[pos][5];
 chF = questions[pos][6];
 chG = questions[pos][7];
 chH = questions[pos][8];
 
 
 test.innerHTML = "<h3 id='headingz'>"+question+"</h3><br><br>";
 // the += appends to the data we started on the line above
 test.innerHTML += "<input type='radio' id='radio' name='choices' value='A'> "+chA+"<br><br>";
 test.innerHTML += "<input type='radio' id='radio' name='choices' value='B'> "+chB+"<br><br>";
 test.innerHTML += "<input type='radio' id='radio' name='choices' value='C'> "+chC+"<br><br>";
 test.innerHTML += "<button id='next_button' onclick= 'checkAnswer()'>Next</button>";
 // test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
 }
 
 
 // resets the variable to allow users to restart the test
 function ss(){
 window.location.reload();
 }
 
 
 function checkAnswer(){
 // use getElementsByName because we have an array which it will loop through
 choices = document.getElementsByName("choices");
 for(var i=0; i<choices.length; i++){
 if(choices[i].checked){
 choice = choices[i].value;
 }
 }
 
 if ((choices[0].checked == false) && (choices[1].checked == false) && (choices[2].checked == false)) {
 alert('Please make a selection!');
 } else {
 // checks if answer matches the correct choice
 if(choice == questions[pos][4]){
 //each time there is a correct answer this value increases
 correct++;
 }
 // changes position of which character user is on
 pos++;
 // then the renderQuestion function runs again to go to next question
 renderQuestion();
 }
 
 }
 
 //document.getElementById("next").onclick = function(){
 //    checkAnswer();
 //};
 
 window.addEventListener("load", renderQuestion, false);

})();
