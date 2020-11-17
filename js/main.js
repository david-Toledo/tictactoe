console.log("this will run the game");




let variables = [
  "box1",
  "box2",
  "box3",
  "box4",
  "box5",
  "box6",
  "box7",
  "box8",
  "box9"
]

const winner = function(player){
  if($("#box1").hasClass(player) && $("#box2").hasClass(player) && $("#box3").hasClass(player)){
  console.log("player has won");
  alert("player has won")
  }
}



let player;
let boxSelected;

$("#buttonX").on("click",function(){
  console.log("x button pressed");
  player="x"
  console.log("its x turn");
})

$("#buttonO").on("click",function(){
  console.log("o button pressed");
  player="o"
  console.log("its o turn");
})


$(".box").on("click",function(){
  if (player == "x"){
  // boxSelected = $(this).css({
  //   "background-color": "yellow"
  // });
  // console.log("box clicked");
  // console.log(boxSelected);
  // const boxId = $(this).attr("id");
  // console.log(boxId);
  const boxClass = $(this).addClass("x");
  // console.log(boxClass);
  // const boxClassAdded = $(this).hasClass("x");

  // alert($(box1).hasClass("x"));
  // functon to decide who the winner is will go here//
  console.log($("#box1").hasClass("x"));
  console.log($("#box2").hasClass("x"));
  console.log($("#box3").hasClass("x"));
  console.log(player);

  winner(player);

  player="o";
  console.log("it's o turn");

} else if (player=="o"){
  // boxSelected = $(this).css({
  //   "background-color": "blue"
  // });
  const boxClassAdded = $(this).addClass("o");

  winner(player);

  player="x";
  console.log("it's x turn");
}

// functon to decide who the winner is will go here//

})





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
