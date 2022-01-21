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

function initializeMap() {
    console.log(tileMap01);
  for (let col = 0; col < tileMap01.width; col++) {
    for (let row = 0; row < tileMap01.height; row++) {
      var element = document.createElement("div");
      element.classList.add("block");

      if (tileMap01.mapGrid[col][row][0] !== " ") {
        console.log(tileMap01.mapGrid[row][col][0]);
        element.classList.add(tileMap01.mapGrid[col][row][0]);
      }

      element.id = "x" + row + "y" + col;
      if (row === 4 && col === 4) {
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
      movePlayer(0, -1);
      break;
    case "ArrowDown":
      movePlayer(0, 1);
      break;
    case "ArrowLeft":
      movePlayer(-1, 0);
      break;
    case "ArrowRight":
      movePlayer(1, 0);
      break;
    default:
      break;
  }
}

function movePlayer(x, y) {
  var newY = player.y + y;
  var newX = player.x + x;
  /*if (newX >= 19 || newY >= 16 || newX <= -1 || newY <= -1) {
    console.log("out of bounds");
    return;
  }
  */
  
  var playerElement = document.getElementById("x" + player.x + "y" + player.y);
  var destination = document.getElementById("x" + newX + "y" + newY);

  playerElement.classList.remove("player");
  destination.classList.add("player");
  player.x = newX;
  player.y = newY;

  // destination.style.backgroundColor = "white";
  console.log("x" + x + " " + "y" + y);
}

initializeMap();
