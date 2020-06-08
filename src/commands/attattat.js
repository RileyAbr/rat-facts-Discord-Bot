const Discord = require("discord.js");

module.exports = {
    name: "attattat",
    description: "Displays a rat ready to roll out",
    execute(msg, args) {
        const tacticalEmbed = new Discord.MessageEmbed()
            .setTitle("🔫🐀")
            .setImage(
                "https://raw.githubusercontent.com/RileyAbr/rat-facts-Discord-Bot/master/assets/rat_pics/rat_tactical.jpg"
            );

        msg.channel.send(tacticalEmbed);
    },
};
