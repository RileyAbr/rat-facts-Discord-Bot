// Load all rat facts
const ratFacts = require("./facts");

// Random function from MSDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

module.exports = {
    name: "fact",
    description: "Gives a fact about rats",
    execute(msg, args) {
        msg.channel.send(
            `> **Did you know?** ${ratFacts[getRandomInt(0, ratFacts.length)]}`
        );
    },
};
