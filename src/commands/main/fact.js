const ratFacts = require("../../data/facts.json");

module.exports = {
    name: "fact",
    commandUsage: "!rat fact (!rat)",
    description: "Gives a fact about rats",
    execute(msg, args) {
        msg.channel.send(
            `> **Did you know?** ${
                ratFacts[Math.floor(Math.random() * [ratFacts.length])]
            }`
        );
    },
};
