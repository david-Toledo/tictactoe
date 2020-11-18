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

//function to delay the reset function for 400 milisecs
const delayReset = function () {
    setTimeout(reset,400);
  }

const displayChoosePlayer = function () {
  $("<p> Choose a player!</p>").appendTo("h1").css({
    "color":"blue",
    "font-size":"20px"
  }).delay(1000).fadeOut();
}

// display winner in the screen function//
const displayWinner = function(player){
  $(`<p>player: "${player}" has won</p><p> Play again!</p>`).appendTo("h1").css({
    "color":"blue",
    "font-size":"20px"
  }).delay(2000).fadeOut();
}

const displayDrawGame = function(){
  $("<p>Its a tie</p> <p>Play again!</p>").appendTo("h1").css({
    "color":"blue",
    "font-size":"20px"
  }).delay(2000).fadeOut();
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
  $("#x").text(`X:${counterX}`)
  $("#o").text(`O:${counterO}`)
  }

//function to determine if boxes make a winner;
const winner = function(player){
  //all boxes on the top
  if($("#box1").hasClass(player) && $("#box2").hasClass(player) && $("#box3").hasClass(player)){
  displayWinner(player);
  addWinToPlayer();
  counterInScreen();
  delayReset();

  }
  //from box 1 to box 9
  if($("#box1").hasClass(player) && $("#box5").hasClass(player) && $("#box9").hasClass(player)){
  displayWinner(player);
  addWinToPlayer();
  counterInScreen();
  delayReset();
  }
  //end of the if 1 to 9

  //from box 1 to 7//
  if($("#box1").hasClass(player) && $("#box4").hasClass(player) && $("#box7").hasClass(player)){
  displayWinner(player);
  addWinToPlayer();
  counterInScreen();
  delayReset();
  }
  //end of the if 1 to 7

  //from box 2 to 8
  if($("#box2").hasClass(player) && $("#box5").hasClass(player) && $("#box8").hasClass(player)){
  displayWinner(player);
  addWinToPlayer();
  counterInScreen();
  delayReset();
  }
  //end of the if 2 to 8

  //from box 3 to 9
  if($("#box3").hasClass(player) && $("#box6").hasClass(player) && $("#box9").hasClass(player)){
  displayWinner(player);
  addWinToPlayer();
  counterInScreen();
  delayReset();
  }
  //end of the if 2 to 9

  //from box 3 to 7
  if($("#box3").hasClass(player) && $("#box5").hasClass(player) && $("#box7").hasClass(player)){
  displayWinner(player);
  addWinToPlayer();
  counterInScreen();
  delayReset();
  }
  //end of the if 2 to 9

  //from box 4 to 6
  if($("#box4").hasClass(player) && $("#box5").hasClass(player) && $("#box6").hasClass(player)){
  displayWinner(player);
  addWinToPlayer();
  counterInScreen();
  delayReset();
  }
  //end of the if 2 to 9
  if (counter == 9){
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
  if (player == "x" && !($(this).hasClass("x")) && !($(this).hasClass("o"))){
  $(this).addClass("x");
  winner(player); //call the function to decide if there is a winner//
  player="o";
  counter++;
  //if counter is = 9 and noone has won it will reset the game //
  // if (counter == 9){
  //   displayDrawGame();
  //   delayReset();
  // }
  console.log("it's o turn");

//what to do when the div is clicked - o turn
//div must not contain "o" or "x" class to work
} else if (player=="o" && !($(this).hasClass("x")) && !($(this).hasClass("o")) ){
  const boxClassAdded = $(this).addClass("o");
  winner(player); // call the function to decide if there is a winner//
  player="x";
  counter++;
    //if counter is = 9 and noone has won it will reset the game //
  // if (counter == 9){
  // displayDrawGame();
  // delayReset();
  
  console.log("it's x turn");
} else {
  displayChoosePlayer();
  console.log("try somewhere else");
}
}) //end of the event

// if ($(".box").hasClass("x") || $(".box").hasClass("o")){
//   console.log("its a tie");
// }
