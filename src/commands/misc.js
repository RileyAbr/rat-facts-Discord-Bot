const Discord = require("discord.js");

module.exports = {
    name: "misc",
    description: "Lists small, one-off commands",
    execute(msg, args) {
        const miscEmbed = new Discord.MessageEmbed()
            .setColor("#66757f")
            .setTitle("!rat misc commands")
            .setThumbnail(
                "https://raw.githubusercontent.com/RileyAbr/rat-facts-Discord-Bot/master/rat_logo.png"
            )
            .addFields(
                {
                    name: "!rat intimidate",
                    value: "Displays an intimidating rat",
                },
                {
                    name: "!rat attattat",
                    value: "Displays a rat ready to roll out",
                }
            );

        msg.channel.send(miscEmbed);
    },
};
