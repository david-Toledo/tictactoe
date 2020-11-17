console.log("this will run the game");

//function to reset all boxes//
const reset = function () {

}


//display winner in the screen function//
const displayWinner = function(player){
  $(`<p>player: ${player} has won</p>`).appendTo("h1").css({
    "color":"blue",
    "font-size":"20px"
  }).delay(1000).fadeOut();
}

//function to determine if boxes make a winner;
const winner = function(player){
  //all boxes on the top
  if($("#box1").hasClass(player) && $("#box2").hasClass(player) && $("#box3").hasClass(player)){
  displayWinner(player);
  $("box").removeClass();

  }
  //from box 1 to box 9
  if($("#box1").hasClass(player) && $("#box5").hasClass(player) && $("#box9").hasClass(player)){
  displayWinner(player);
  }
  //end of the if 1 to 9

  //from box 1 to 7//
  if($("#box1").hasClass(player) && $("#box4").hasClass(player) && $("#box7").hasClass(player)){
  displayWinner(player);
  }
  //end of the if 1 to 7

  //from box 2 to 8
  if($("#box2").hasClass(player) && $("#box5").hasClass(player) && $("#box8").hasClass(player)){
  displayWinner(player);
  }
  //end of the if 2 to 8

  //from box 3 to 9
  if($("#box3").hasClass(player) && $("#box6").hasClass(player) && $("#box9").hasClass(player)){
  displayWinner(player);
  }
  //end of the if 2 to 9

  //from box 4 to 6
  if($("#box4").hasClass(player) && $("#box5").hasClass(player) && $("#box6").hasClass(player)){
  displayWinner(player);
  }
  //end of the if 2 to 9

} //end of the winner function


//define variables
let player;
let boxSelected;

//start of the game - pressing X
$("#buttonX").on("click",function(){
  player="x"
})

//start of the game - pressing O
$("#buttonO").on("click",function(){
  player="o"
})

// what to do when the div is clicked - x turn
//div must not contain "o" or "x" class to work
$(".box").on("click",function(){
  if (player == "x" && !($(this).hasClass("x")) && !($(this).hasClass("o"))){

  const boxClass = $(this).addClass("x");
  winner(player); //call the function to decide if there is a winner//
  player="o";
  console.log("it's o turn");

//what to do when the div is clicked - o turn
//div must not contain "o" or "x" class to work
} else if (player=="o" && !($(this).hasClass("x")) && !($(this).hasClass("o")) ){
  const boxClassAdded = $(this).addClass("o");
  winner(player); // call the function to decide if there is a winner//
  player="x";
  console.log("it's x turn");
} else {
  console.log("try somewhere else");
}


}) //end of the event





// $("#box1").on("click",function(){
//     console.log("box1 pressed");
//     if(player=="x" && $("#box1 p").html() !="O"){
//     $("#box1 p").html("X");
//     player="o";
//     console.log("now its the turn for:",player);
//   } else if (player=="o" && $("#box1 p").html() !="X"){
//     $("#box1 p").html("O");
//     player="x";
//     console.log("now its the turn for:",player);
//   } else {
//     console.log("try somewhere else");
//   }
// })
//
// $("#box2").on("click",function(){
//     console.log("box2 pressed");
//     if(player=="x" && $("#box2 p").html() !="O"){
//     $("#box2 p").html("X");
//     player="o";
//     console.log("now its the turn for:",player);
//   } else if (player=="o" && $("#box2 p").html() !="X"){
//     $("#box2 p").html("O");
//     player="x";
//     console.log("now its the turn for:",player);
//   } else {
//     console.log("try somewhere else");
//   }
// })
//
// $("#box3").on("click",function(){
//     console.log("box3 pressed");
//     if(player=="x" && $("#box3 p").html() !="O"){
//     $("#box3 p").html("X");
//     player="o";
//     console.log("now its the turn for:",player);
//   } else if (player=="o" && $("#box3 p").html() !="X"){
//     $("#box3 p").html("O");
//     player="x";
//     console.log("now its the turn for:",player);
//   } else {
//     console.log("try somewhere else");
//   }
// })
