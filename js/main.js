console.log("this will run the game");

const variables = {

}


let player;

$("#buttonX").on("click",function(){
  console.log("X pressed");
  player="x"
  console.log("its the turn for",player);
})

$("#buttonO").on("click",function(){
  console.log("O pressed");
  player="o"
  console.log("its the turn for",player);
})


$("#box1").on("click",function(){
    console.log("box1 pressed");
    if(player=="x" && $("#box1 p").html() !="O"){
    $("#box1 p").html("X");
    player="o";
    console.log("now its the turn for:",player);
  } else if (player=="o" && $("#box1 p").html() !="X"){
    $("#box1 p").html("O");
    player="x";
    console.log("now its the turn for:",player);
  } else {
    console.log("try somewhere else");
  }
})

$("#box2").on("click",function(){
    console.log("box2 pressed");
    if(player=="x" && $("#box2 p").html() !="O"){
    $("#box2 p").html("X");
    player="o";
    console.log("now its the turn for:",player);
  } else if (player=="o" && $("#box2 p").html() !="X"){
    $("#box2 p").html("O");
    player="x";
    console.log("now its the turn for:",player);
  } else {
    console.log("try somewhere else");
  }
})

$("#box3").on("click",function(){
    console.log("box3 pressed");
    if(player=="x" && $("#box3 p").html() !="O"){
    $("#box3 p").html("X");
    player="o";
    console.log("now its the turn for:",player);
  } else if (player=="o" && $("#box3 p").html() !="X"){
    $("#box3 p").html("O");
    player="x";
    console.log("now its the turn for:",player);
  } else {
    console.log("try somewhere else");
  }
})
