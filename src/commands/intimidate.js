const Discord = require("discord.js");

module.exports = {
    name: "intimidate",
    description: "Displays an intimidating rat",
    execute(msg, args) {
        const intimidateEmbed = new Discord.MessageEmbed()
            .setTitle("Reconsider.")
            .setImage(
                "https://raw.githubusercontent.com/RileyAbr/rat-facts-Discord-Bot/master/assets/rat_pics/rat_intimidate.jpeg"
            );

        msg.channel.send(intimidateEmbed);
    },
};
