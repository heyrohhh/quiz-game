 
   
document.addEventListener('DOMContentLoaded', function(){
    let currentque = 1
    let totalquestion = 5

    function showquestion(questionnumber){
            const question = document.querySelectorAll('.main>div')
            question.forEach((question,index) =>{
                question.style.display= index+1 === questionnumber ? 'block':'none'
            })
    }
    function next(){
        if(currentque<totalquestion){
            currentque++
        }
        showquestion(currentque)
    }
    
    function prev(){
        if(currentque>1){
            currentque--
        }
        showquestion(currentque)
    }
    
    document.getElementById('nextButton').addEventListener('click',next)
    document.getElementById('preButton').addEventListener('click',prev)
     

    showquestion(currentque)
})

// for right and wron gquestion

function result(ans) {
    let correctAnswer = "Hyper Text Markup Language";
    let userAnswer = ans.trim(); // Trim to remove leading/trailing spaces
  
    let rightOptions = document.getElementsByClassName("right");
    let wrongOptions = document.getElementsByClassName("wrong");
  
    // Loop through the right options and set their background color
    for (let i = 0; i < rightOptions.length; i++) {
      if (rightOptions[i].textContent === correctAnswer) {
        rightOptions[i].style.backgroundColor = userAnswer === correctAnswer ? "green" : "green";
      } 
    }
  
    // Loop through the wrong options and set their background color
    for (let i = 0; i < wrongOptions.length; i++) {
      wrongOptions[i].style.backgroundColor = "red";
    }
  }
   // for second answer

  function result1(ans1) {
    let correctAnswer = "len";
    let userAnswer = ans1.trim(); // Trim to remove leading/trailing spaces
  
    let rightOptions = document.getElementsByClassName("right1");
    let wrongOptions = document.getElementsByClassName("wrong1");
  
    // Loop through the right options and set their background color
    for (let i = 0; i < rightOptions.length; i++) {
      if (rightOptions[i].textContent === correctAnswer) {
        rightOptions[i].style.backgroundColor = userAnswer === correctAnswer ? "green" : "green";
      } 
    }
  
    // Loop through the wrong options and set their background color
    for (let i = 0; i < wrongOptions.length; i++) {
      wrongOptions[i].style.backgroundColor = "red";
    }
  }
  // third  ANSWER
  function result2(ans2) {
    let correctAnswer = "Cascading Style Sheets";
    let userAnswer = ans2.trim(); // Trim to remove leading/trailing spaces
  
    let rightOptions = document.getElementsByClassName("right2");
    let wrongOptions = document.getElementsByClassName("wrong2");
  
    // Loop through the right options and set their background color
    for (let i = 0; i < rightOptions.length; i++) {
      if (rightOptions[i].textContent === correctAnswer) {
        rightOptions[i].style.backgroundColor = userAnswer === correctAnswer ? "green" : "green";
      } 
    }
  
    // Loop through the wrong options and set their background color
    for (let i = 0; i < wrongOptions.length; i++) {
      wrongOptions[i].style.backgroundColor = "red";
    }
  }


  // fourth answer

  function result3(ans3) {
    let correctAnswer = "Java";
    let userAnswer = ans3.trim(); // Trim to remove leading/trailing spaces
  
    let rightOptions = document.getElementsByClassName("right3");
    let wrongOptions = document.getElementsByClassName("wrong3");
  
    // Loop through the right options and set their background color
    for (let i = 0; i < rightOptions.length; i++) {
      if (rightOptions[i].textContent === correctAnswer) {
        rightOptions[i].style.backgroundColor = userAnswer === correctAnswer ? "green" : "green";
      } 
    }
  
    // Loop through the wrong options and set their background color
    for (let i = 0; i < wrongOptions.length; i++) {
      wrongOptions[i].style.backgroundColor = "red";
    }
  }


//   fifth answe

  function result4(ans4) {
    let correctAnswer = "Application Programming Interface";
    let userAnswer = ans4.trim(); // Trim to remove leading/trailing spaces
  
    let rightOptions = document.getElementsByClassName("right4");
    let wrongOptions = document.getElementsByClassName("wrong4");
  
    // Loop through the right options and set their background color
    for (let i = 0; i < rightOptions.length; i++) {
      if (rightOptions[i].textContent === correctAnswer) {
        rightOptions[i].style.backgroundColor = userAnswer === correctAnswer ? "green" : "green";
      } 
    }
  
    // Loop through the wrong options and set their background color
    for (let i = 0; i < wrongOptions.length; i++) {
      wrongOptions[i].style.backgroundColor = "red";
    }
  }











