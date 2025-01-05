const Dragon = require("./classes/dragon");
const EvilDragon = require("./classes/evil-dragon");
const FriendlyDragon = require("./classes/friendly-dragon");

falkor = new FriendlyDragon(
  "Falkor",
  "white",
  [
    "save Atreyu from the swamp",
    "save Atreyu from the Nothing",
    "scare the local bullies into a dumpster",
  ],
  "Bastian"
);

smaug = new EvilDragon(
  "Smaug",
  "black",
  [
    "take over your mountain kingdom",
    "steal all your dwarven gold",
    "burn down your floating village",
  ],
  "Dwarf King"
);

let allDragons = Dragon.getDragons(falkor, smaug);
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = { falkor, smaug, allDragons };
  // module.exports = smaug;
} catch {
  module.exports = null;
}
