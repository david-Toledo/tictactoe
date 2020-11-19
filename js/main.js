console.log("this will run the game");

//define variables
let player;
let counter = 0;//this will make sure once its 9 its a tie
let counterX = 0; // this will keep track of the "X" wins
let counterO = 0; // this will keep track of the "O" wins

//function to reset all boxes//
const reset = function () {
    $(".box").removeClass("x").removeClass("o");
    player=undefined;
    counter = 0;
}
//function to display: "choose player" when user hasnt selected "x" or "o"//
const displayChoosePlayer = function () {
  $("<p> Choose a player!</p>").appendTo("h1").css({
    "color":"blue",
    "font-size":"20px"
  }).delay(800).fadeOut();
}

// function to display the winner in the screen //
const displayWinner = function(player){
  $(`<p>player: "${player}" has won</p><p> Play again!</p>`).appendTo("h1").css({
    "color":"blue",
    "font-size":"20px"
  }).delay(1000).fadeOut();
}

//function when there is a draw game //
const displayDrawGame = function(){
  $("<p>Its a tie</p> <p>Play again!</p>").appendTo("h1").css({
    "color":"blue",
    "font-size":"20px"
  }).delay(1000).fadeOut();
}

//function to keep track of the wins of each player//
const addWinToPlayer = function () {
  if (player=="x"){
    counterX ++;
  } else if (player =="o") {
    counterO ++;
  }
}

//function to show the counter in the screen//
const counterInScreen = function(){
  $("#x").text(`Player X:${counterX}`)
  $("#o").text(`Player O:${counterO}`)
  }

//call other functions when there is a win after the divs comparation //
const winnerOutcome = function(){
  displayWinner(player);
  addWinToPlayer();
  counterInScreen();
  setTimeout(reset,600);
}

//function to determine if boxes match a winner//
const winner = function(player){
  if(($("#box1").hasClass(player) && $("#box2").hasClass(player) && $("#box3").hasClass(player))
  ||($("#box1").hasClass(player) && $("#box5").hasClass(player) && $("#box9").hasClass(player))
  ||($("#box1").hasClass(player) && $("#box4").hasClass(player) && $("#box7").hasClass(player))
  ||($("#box2").hasClass(player) && $("#box5").hasClass(player) && $("#box8").hasClass(player))
  ||($("#box3").hasClass(player) && $("#box6").hasClass(player) && $("#box9").hasClass(player))
  ||($("#box3").hasClass(player) && $("#box5").hasClass(player) && $("#box7").hasClass(player))
  ||($("#box4").hasClass(player) && $("#box5").hasClass(player) && $("#box6").hasClass(player))
  ||($("#box7").hasClass(player) && $("#box8").hasClass(player) && $("#box9").hasClass(player))){
    winnerOutcome();
  } else if (counter == 9){
    displayDrawGame();
    setTimeout(reset,600);
  }
} //end of the winner function

//start the game - pressing "X"
$("#buttonX").on("click",function(){
  player="x"
})

//start the game - pressing "O"
$("#buttonO").on("click",function(){
  player="o"
})

// what to do when any div is clicked - x turn
$(".box").on("click",function(){
  if( $(this).hasClass("x") ||  $(this).hasClass("o") ){
    return;
  }
  if (player == "x"){
    $(this).addClass("x");
    counter++;
    winner(player);
    player="o";
  } else if(player=="o"){
    $(this).addClass("o");
    counter++;
    winner(player);
    player="x";
    }else {
    displayChoosePlayer();
    } //end of the else
}) //end of the event
