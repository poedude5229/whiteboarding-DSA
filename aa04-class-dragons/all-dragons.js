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


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports.falkor = falkor;
  // module.exports.smaug = smaug;
} catch {
  module.exports = null;
}
