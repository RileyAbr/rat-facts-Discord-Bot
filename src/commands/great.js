const Discord = require("discord.js");

const greatScript = require("./chasing.json");

module.exports = {
    name: "great",
    description: "Sponsored by the Honda Ratccord",
    execute(msg, args) {
        msg.channel.send(`> *${greatScript}* -Yiliang "DoubleRat" Peng`);
    },
};
