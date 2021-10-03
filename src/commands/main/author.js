const Discord = require("discord.js");

module.exports = {
    name: "author",
    commandUsage: "!rat author",
    description: "Provides the author and social links for the bot",
    execute(msg, args) {
        const authorEmbed = new Discord.MessageEmbed()
            .setColor("#66757f")
            .setTitle("rat facts Discord Bot")
            .setURL("https://github.com/RileyAbr/rat-facts-Discord-Bot")
            .setDescription("Created by Riley Abrahamson.")
            .setThumbnail(
                "https://raw.githubusercontent.com/RileyAbr/rat-facts-Discord-Bot/master/rat_logo.png"
            )
            .addFields({
                name: "Riley's Website",
                value: "www.rileyabrahamson.com",
            })
            .addFields({
                name: "Twitter",
                value: "@RileyAbrahamson",
            })
            .addFields({
                name: "GitHub",
                value: "RileyAbr",
            });

        msg.channel.send(authorEmbed);
    },
};
