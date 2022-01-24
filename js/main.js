/**
 * Simple Sokoban game
 * @author Johan Ivarsson <https://github.com/vingnir>
 */

const playground = document.getElementById("playground");
const successBlocks = 1;
document.body.addEventListener("keyup", keyPress);
var directionX;
var directionY;
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

function movePlayer(x, y) {
  var newY = player.y + y;
  var newX = player.x + x;
  var playerElement = document.getElementById("x" + player.x + "y" + player.y);
  var destination = document.getElementById("x" + newX + "y" + newY);
  if (
    !destination.classList.contains("W") &&
    !destination.classList.contains("B")
  ) {
    playerElement.classList.remove("player");
    destination.classList.add("player");
    player.x = newX;
    player.y = newY;
  } else if (destination.classList.contains("B") && isMovable(newX, newY)) {
    playerElement.classList.remove("player");
    destination.classList.add("player");
    player.x = newX;
    player.y = newY;
    moveBox(directionX, directionY);
  } else return;
}

function isMovable(x, y) {
  box.y = y + directionY;
  box.x = x + directionX;
  var boxDestination = document.getElementById("x" + box.x + "y" + box.y);
  if (
    boxDestination.classList.contains("W") ||
    boxDestination.classList.contains("B")
  ) {
    return false;
  } else return true;
}
function moveBox(x, y) {
  var newY = player.y + y;
  var newX = player.x + x;
  var boxElement = document.getElementById("x" + player.x + "y" + player.y);
  var boxDestination = document.getElementById("x" + newX + "y" + newY);

  if (boxDestination.classList.contains("G")) {
    boxElement.classList.remove("G-success");
    boxDestination.classList.add("G-success");
  }
  var score = document.getElementsByClassName("G-success");
  boxElement.classList.remove("B");
  boxDestination.classList.add("B");
  if (score.length == successBlocks) {
    setTimeout(function () {
        alert("Hurray! You won the game!");
         window.location.reload();
    }, 500);  
  }
}

initializeMap();
