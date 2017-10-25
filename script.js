var score;
score = 0;
alert('Ready For Fun Facts?!!!')


var question1;
question1 = prompt("Everyone has a unique ________ print, just like fingerprints.")
if(question1 == "tongue") {
 score++;
 alert("You got one too, you scored: " +score)
 }
 else {
   alert("Nope! Your scored "+score)
 }

 var question2;
 question2 = prompt("The loneliest creature on Earth is a ________ who has been calling out for a mate for over two")
 if(question2 == "whale") {
  score++;
  event.preventDefault();
  alert("Impressive, you scored " +score)
  }
  else {
    alert("Nope! Your scored "+score)
  }

  var question3;
  question3 = prompt("A shrimp's heart is in it's...")
  if(question3 == "head") {
   score++;
   alert("Isn't that a crazy fact, you scored " +score)
   }
   else {
     alert("Nope! Your scored "+score)
   }

   var question4;
   question4 = prompt("The first American film to show a toilet being flushed on screen was")
   if(question4 == "Alfred Hitchcock's Psycho") {
    score++;
    alert("we've come a long way, you scored " +score)
    }
    else {
      alert("Nope! Your scored "+score)
    }

    var question5;
    question5 = prompt("The Romans used to clean and whiten their teeth with _______")
    if(question5 == "urine") {
     score++;
     alert("yuck, you scored " +score)
     }
     else {
       alert("Nope! Your scored "+score)
     }
  if(score == 5) {
    alert("Your score is "+score+" & You are the winner!!!")
  } else{
    alert("Your score is "+score+" LOOSER!!!")
  }
