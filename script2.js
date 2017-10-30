$(document).ready(function() {

  let score = 0;
  let current_guess = [];
  let numberOfGuesses = 0;
  let answers = ["Tongue", "Whale", "Alfred Hitchcock's Psycho", "Urine", "Head"];

  $(".page").hide();
  $(".answers").hide();

  $("#start").click(startGame);
  $("input").click(verifyGuess);
  $("#next1").click(loadQ2);
  $("#next2").click(loadQ3);
  $("#next3").click(loadQ4);
  $("#next4").click(loadQ5);

  function startGame() {
    $("#start").hide()
    $("#Page1").show();
  }

  function loadQ2() {
    $("#Page1").hide()
    $("#Page2").show();
  }

  function loadQ3() {
    $("#Page2").hide()
    $("#Page3").show();
  }

  function loadQ4() {
    $("#Page3").hide()
    $("#Page4").show();
  }

  function loadQ5() {
    $("#Page4").hide()
    $("#Page5").show();
  }

  function verifyGuess() {
    numberOfGuesses++
    let current_guess = $(this).val()
    for (i = 0; i < answers.length; i++) {
      if (answers[i] === current_guess) {
        score++
      }
    }
    if (numberOfGuesses === 5) {
      $(".answers").show()
      alert(`That's game! Your score: ${score} out of 5`)
      setTimeout(location.reload.bind(location), 3000);
    }
  }

});
