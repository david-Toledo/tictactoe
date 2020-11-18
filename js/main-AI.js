console.log("this will run the game with AI");

//define variables
let player;
let counter = 0;//this will make sure once its 9 its a tie
let counterX = 0; // this will keep track of the X wins
let counterCPU = 0; // this will keep track of the O wins

//function to reset all boxes//
const reset = function () {
    $(".box").removeClass("x").removeClass("cpu");
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
  } else if (player =="cpu") {
    counterCPU ++;
  }
  console.log("x has won",counterX);
  console.log("CPU has won",counterCPU);
}

const counterInScreen = function(){
  $("#x").text(`Player:${counterX}`)
  $("#o").text(`CPU:${counterCPU}`)
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
  console.log("player:",player);
} //end of the winner function

//create a function for the cpu to play
  const cpuTurn = function () {
      if (!($("#box5").hasClass("x"))){
        $("#box5").addClass("cpu")
      } else if (!($("#box1").hasClass("x"))){
        $("#box1").addClass("cpu")
      } else if (!($("#box3").hasClass("x"))){
        $("#box3").addClass("cpu")
      } else if (!($("#box7").hasClass("x"))){
        $("#box7").addClass("cpu")
      } else if (!($("#box9").hasClass("x"))){
        $("#box9").addClass("cpu")
      } else if (!($("#box2").hasClass("x"))){
        $("#box2").addClass("cpu")
      } else if (!($("#box4").hasClass("x"))){
        $("#box4").addClass("cpu")
      } else if (!($("#box6").hasClass("x"))){
        $("#box6").addClass("cpu")
      } else if (!($("#box8").hasClass("x"))){
        $("#box8").addClass("cpu")
      } //end of the else
  } //end of the cpu function.




//start of the game - pressing "X" player will be X
$("#buttonX").on("click",function(){
  player="x"
})

//start of the game - or pressing "O" player will be X too
$("#buttonO").on("click",function(){
  player="x"
})

// what to do when the div is clicked - x turn
//div must not contain "o" or "x" class to work
$(".box").on("click",function(){
  if( $(this).hasClass("x") ||  $(this).hasClass("cpu") ){
    return;
  }
  if (player == "x"){
    $(this).addClass("x");
    counter++;
    winner(player); //call the function to decide if there is a winner//
    player="cpu";
    console.log("it's cpu turn");
    cpuTurn();
    winner(player);
    player="x";
    console.log("player's turn");

    //what to do when the div is clicked - o turn
    //div must not contain "o" or "x" class to work
  // } else if(player=="o"){
  //   $(this).addClass("o");
  //   counter++;
  //   winner(player); // call the function to decide if there is a winner//
  //   player="x";
  //   //if counter is = 9 and noone has won it will reset the game //
  //   // if (counter == 9){
  //   // displayDrawGame();
  //   // delayReset();
  //   console.log("it's x turn");
  }else {
  displayChoosePlayer();
  console.log("try somewhere else");
} //end of the else
}) //end of the event

// if ($(".box").hasClass("x") || $(".box").hasClass("o")){
//   console.log("its a tie");
// }
