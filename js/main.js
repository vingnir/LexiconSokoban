/**
 * Generates a Game board
 * @author Johan Ivarsson <https://github.com/vingnir>
 * @param {HTMLDivElement} tab - The target HTML <div>
 * @param {Array} data - The array of div id names
 * * @return {void} Nothing
 */

const playground = document.getElementById("playground");

var player = {
  x: -1,
  y: -1,
};

function initializeMap()
{
    for(let row = 0; row < 10; row++)
    {
       for(let col = 0; col < 10; col++){
        var element = document.createElement("div");
        element.classList.add("block");
        element.id = "y" + row + "x" + col;
        if(row === 4 && col === 4)
        {
            element.classList.add("player");
            player.x = row;
            player.y = col;
        }
        playground.appendChild(element)
       } 

    }
}

initializeMap();