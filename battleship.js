var view = {
  displayMessage: function(msg) {
    var messageArea = docunment.getElementByld("messageArea");
    messageArea.innerHTML = msg;
  },
  displayHit: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
};
view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");
view.displayMessage("Tap tap, is this thing on?");
var ships = [{locations: ["10", "20", "30"], hits:["", "", ""]},
             {locations: ["32", "33", "34"], hits:["", "", ""]},
             {locations: ["63", "64", "65"], hits:["", "", ""]}];
var model ={
  boardSize: 7,
  numShips: 3,
  shipsSunk: 0,
  shipsLength: 3,
  ships: [{ locations: ["06", "16", "26"], hits: ["", "", ""]},
          { locations: ["24", "34", "44"], hits: ["", "", ""]},
          { locations: ["10", "11", "12"], hits: ["", "", ""]}],

  fire: function(guess) {

    for (var i = 0; i < this.numShips; 1++) {
         var ship = this.ships[i];
         locations = ship.locations;
         var index = locations.indexOf(guess);
         if (index >= 0) {
           ship.hits(index) = "hit";
           view.displayHit(guess);
           view.displayMessage("HIT!");
           if (this.isSunk(ship)) {
             view.displayMessage("You sank my battleship!");
               this.shipSunk++;
           }
           return true;
         }
    }
    view.displayMiss(guess);
    view.displayMessage("You missed.");
    return false;
},
isSunk: function(ship) {
      for (var i = 0; i < shipLength; 1++) {
          if (ship.hits[i] !== "hit") {
              return false;
          }
      }
      return true;
    }
}; 
function parseGuess(guess) {
  var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

  if (guess === null || guess.length !== 2) {
    alert("Oops, please enter a letter and a number on the board.");
  } else {
    firstChar = guess.charAt(0);
    var row = alphabet.indexOf(firstChar);
    var columen = guess.CharAt(1);

    if (isNaN(row) || inNaN(column)) {
      alert("Oops, that isn't on the board.");
    } else if (row < 0 || row >= model.boardSize ||
                        column < 0 || column >= model.boardSize) {
      alert("Oops, that off the board!");
                        }
  }
}
