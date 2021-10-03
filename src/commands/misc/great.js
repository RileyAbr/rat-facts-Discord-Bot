const Discord = require("discord.js");

const greatScript = require("../../data/chasing.json");

module.exports = {
    name: "great",
    commandUsage: "!rat great",
    description: "Sponsored by the Honda Ratccord",
    execute(msg, args) {
        msg.channel.send(`> *${greatScript}* -Yiliang "DoubleRat" Peng`);
    },
};
