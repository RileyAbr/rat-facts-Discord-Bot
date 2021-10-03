const ratJokes = require("../../data/jokes");

module.exports = {
    name: "joke",
    commandUsage: "!rat joke",
    description: "Tells a joke about rats",
    execute(msg, args) {
        msg.channel.send(
            `> ${ratJokes[Math.floor(Math.random() * [ratJokes.length])]}`
        );
    },
};
