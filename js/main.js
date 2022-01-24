/**
 * Generates a Game board
 * @author Johan Ivarsson <https://github.com/vingnir>
 */

const playground = document.getElementById("playground");

document.body.addEventListener("keyup", keyPress);

var player = {
  x: -1,
  y: -1,
};

var box = {
  x: -1,
  y: -1,
};


/* Render Map*/     
function initializeMap() {
    console.log(tileMap01);
  for (let col = 0; col < tileMap01.height; col++) {
    for (let row = 0; row < tileMap01.width; row++) {
      var element = document.createElement("div");
      element.classList.add("block");

      if (tileMap01.mapGrid[col][row][0] !== " ") {
        element.classList.add(tileMap01.mapGrid[col][row][0]);
      }

      element.id = "x" + row + "y" + col;
      if (tileMap01.mapGrid[col][row][0] === "P") {
        element.classList.add("player");
        player.x = row;
        player.y = col;
      }
      playground.appendChild(element);
    }
  }
}
var directionX;
var directionY;
function keyPress(e) {
  console.log(e.key);
  switch (e.key) {
    case "ArrowUp":
        directionX = 0;
        directionY = -1;
      movePlayer(0, -1);
      break;
    case "ArrowDown":
        directionX = 0;
        directionY = 1;
      movePlayer(0, 1);
      break;
    case "ArrowLeft":
        directionX = -1;
        directionY = 0;
      movePlayer(-1, 0);
      break;
    case "ArrowRight":
        directionX = 1;
        directionY = 0;
      movePlayer(1, 0);
      break;
    default:
      break;
  }
}

function isBox(){

}

function movePlayer(x, y) {
  var newY = player.y + y;
  var newX = player.x + x;
  var mapPos = tileMap01.mapGrid[newY][newX][0];
  
if (mapPos === "W") {
  alert("wall");
  return;
} else if (mapPos === "B") {
  alert("chicken");
  
} else if (mapPos === "G") {
  alert("Goal");
} else {
  console.log("testar");
}
  var playerElement = document.getElementById("x" + player.x + "y" + player.y);
  var destination = document.getElementById("x" + newX + "y" + newY);
  
  playerElement.classList.remove("player");
  destination.classList.add("player");
  player.x = newX;
  player.y = newY;
  if (mapPos === "B") {
    alert("box");
    moveBox(directionX, directionY);
  }
  

  
  console.log("x" + x + " " + "y" + y);
}

function moveBox(x, y) {
 
var newY = player.y + y;
var newX = player.x + x;
var boxElement = document.getElementById("x" + player.x + "y" + player.y);
//console.log("boxelement" + boxElement);
//console.log("boxDest" + boxDestination);

var boxDestination = document.getElementById("x" + newX + "y" + newY);

boxElement.classList.remove("B");
boxDestination.classList.add("B");

}

initializeMap();

/*
  if (newX >= 19 || newY >= 16 || newX <= -1 || newY <= -1) {
    console.log("out of bounds");
    return;
  }

if (tileMap01.mapGrid[newY-1][row][0] !== "W")

  */

//var isWalkableBlock = tileMap01.mapGrid[newY - 1][newX-1][0];
//console.log(isWalkableBlock);
// destination.style.backgroundColor = "white";
