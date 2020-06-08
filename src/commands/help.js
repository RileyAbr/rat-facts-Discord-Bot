const Discord = require("discord.js");

module.exports = {
    name: "help",
    description: "Shows all of the commands available",
    execute(msg, args) {
        const helpEmbed = new Discord.MessageEmbed()
            .setColor("#66757f")
            .setTitle("!rat commands")
            .setThumbnail(
                "https://raw.githubusercontent.com/RileyAbr/rat-facts-Discord-Bot/master/rat_logo.png"
            )
            .addFields(
                {
                    name: "!rat fact (!rat)",
                    value: "Gives a random fact about rats",
                },
                {
                    name: "!rat pic",
                    value: "Shows off a picture of a rat",
                },
                {
                    name: "!rat joke",
                    value: "Tells a joke about rats",
                },
                {
                    name: "!rat 8ball {question}",
                    value: "The bot predicts your future",
                },
                {
                    name: "!rat lore",
                    value: "Tells the story of the rat facts bot",
                },
                {
                    name: "!rat help",
                    value: "Lists all of the commands available",
                },
                {
                    name: "!rat misc",
                    value: "Lists small, one-off commands",
                }
            )
            .setFooter(
                "rat bot created by Riley Abrahamson",
                "https://avatars3.githubusercontent.com/u/32375220?s=460&u=a375968682555bb66226556bf7ee33d6d35b7961&v=4"
            );

        msg.channel.send(helpEmbed);
    },
};
