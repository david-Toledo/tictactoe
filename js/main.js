console.log("this will run the game");

//define variables
let player;
let counter = 0;//this will make sure once its 9 its a tie
let counterX = 0; // this will keep track of the X wins
let counterO = 0; // this will keep track of the O wins

//function to reset all boxes//
const reset = function () {
    $(".box").removeClass("x").removeClass("o");
    player=undefined;
    counter = 0;
}

const displayChoosePlayer = function () {
  $("<p> Choose a player!</p>").appendTo("h1").css({
    "color":"blue",
    "font-size":"20px"
  }).delay(800).fadeOut();
}

// display winner in the screen function//
const displayWinner = function(player){
  $(`<p>player: "${player}" has won</p><p> Play again!</p>`).appendTo("h1").css({
    "color":"blue",
    "font-size":"20px"
  }).delay(1000).fadeOut();
}

const displayDrawGame = function(){
  $("<p>Its a tie</p> <p>Play again!</p>").appendTo("h1").css({
    "color":"blue",
    "font-size":"20px"
  }).delay(1000).fadeOut();
}

const addWinToPlayer = function () {
  if (player=="x"){
    counterX ++;
  } else if (player =="o") {
    counterO ++;
  }
  console.log("x has won",counterX);
  console.log("o has won",counterO);
}

const counterInScreen = function(){
  $("#x").text(`Player X:${counterX}`)
  $("#o").text(`Player O:${counterO}`)
  }

//call other functions when there is a win after the comparasion of divs
const winnerOutcome = function(){
  displayWinner(player);
  addWinToPlayer();
  counterInScreen();
  setTimeout(reset,600);
}

//function to determine if boxes make a winner;
const winner = function(player){
  //all boxes on the top
  if(($("#box1").hasClass(player) && $("#box2").hasClass(player) && $("#box3").hasClass(player))
  ||($("#box1").hasClass(player) && $("#box5").hasClass(player) && $("#box9").hasClass(player))
  ||($("#box1").hasClass(player) && $("#box4").hasClass(player) && $("#box7").hasClass(player))
  ||($("#box2").hasClass(player) && $("#box5").hasClass(player) &&   $("#box8").hasClass(player))
  ||($("#box3").hasClass(player) && $("#box6").hasClass(player) &&   $("#box9").hasClass(player))
  ||($("#box3").hasClass(player) && $("#box5").hasClass(player) && $("#box7").hasClass(player))
  ||($("#box4").hasClass(player) && $("#box5").hasClass(player) && $("#box6").hasClass(player))
  ||($("#box7").hasClass(player) && $("#box8").hasClass(player) && $("#box9").hasClass(player))){
    winnerOutcome();
  } else if (counter == 9){
    displayDrawGame();
    delayReset();
  }
} //end of the winner function

//start of the game - pressing "X"
$("#buttonX").on("click",function(){
  player="x"
})

//start of the game - or pressing "O"
$("#buttonO").on("click",function(){
  player="o"
})

// what to do when the div is clicked - x turn
//div must not contain "o" or "x" class to work
$(".box").on("click",function(){
  if( $(this).hasClass("x") ||  $(this).hasClass("o") ){
    return;
  }
  if (player == "x"){
    $(this).addClass("x");
    counter++;
    winner(player); //call the function to decide if there is a winner//
    player="o";
    console.log("it's o turn");
    //what to do when the div is clicked - o turn
    //div must not contain "o" or "x" class to work
  } else if(player=="o"){
    $(this).addClass("o");
    counter++;
    winner(player); // call the function to decide if there is a winner//
    player="x";
    //if counter is = 9 and noone has won it will reset the game //
    // if (counter == 9){
    // displayDrawGame();
    // delayReset();
    console.log("it's x turn");
  }else {
  displayChoosePlayer();
  console.log("try somewhere else");
} //end of the else
}) //end of the event

// if ($(".box").hasClass("x") || $(".box").hasClass("o")){
//   console.log("its a tie");
// }
