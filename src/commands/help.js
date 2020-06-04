const Discord = require("discord.js");

module.exports = {
    name: "help",
    description: "Shows all of the commands available to the bot",
    execute(msg, args) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor("#66757f")
            .setTitle("!rat Commands")
            // .setURL("")
            .setDescription("Some description here")
            .attachFiles(["../rat_logo.png"])
            .setThumbnail("attachment://rat_logo.png")
            .addFields(
                { name: "Regular field title", value: "Some value here" },
                { name: "\u200B", value: "\u200B" },
                {
                    name: "Inline field title",
                    value: "Some value here",
                    inline: true,
                },
                {
                    name: "Inline field title",
                    value: "Some value here",
                    inline: true,
                }
            )
            .addField("Inline field title", "Some value here", true)
            .setImage("https://i.imgur.com/wSTFkRM.png")
            .setTimestamp()
            .setFooter(
                "Some footer text here",
                "https://i.imgur.com/wSTFkRM.png"
            );

        msg.channel.send(exampleEmbed);
    },
};
