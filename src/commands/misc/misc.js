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
                },
                {
                    name: "!rat train",
                    value: "All board! 🚂🐀🐀🐀",
                },
                {
                    name: "!rat anthem",
                    value: "Links the anthem of rats",
                },
                {
                    name: "!rat great",
                    value: "Sponsored by the Honda Ratccord",
                },
                {
                    name: "!rat version",
                    value: "Shows the current release of rat facts",
                }
            );

        msg.channel.send(miscEmbed);
    },
};
