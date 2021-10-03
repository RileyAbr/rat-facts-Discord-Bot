const Discord = require("discord.js");

const donateLink = "https://ko-fi.com/rileyabrahamson";

module.exports = {
    name: "donate",
    commandUsage: "!rat donate",
    description: "Provides ways to donate to `rat facts`",
    execute(msg, args) {
        const donateEmbed = new Discord.MessageEmbed()
            .setColor("#66757f")
            .setTitle("🧀 Donate to rat facts!")
            .setURL(donateLink)
            .setDescription(
                "All proceeds from donations go towards help to keep `rat facts` running. Donations are not expected, but always appreciated! 🐀"
            )
            .setThumbnail(
                "https://raw.githubusercontent.com/RileyAbr/rat-facts-Discord-Bot/master/rat_logo.png"
            )
            .addFields({
                name: "Kofi",
                value: donateLink,
            })
            .setFooter(
                "rat facts created by Riley Abrahamson",
                "https://avatars3.githubusercontent.com/u/32375220?s=460&u=a375968682555bb66226556bf7ee33d6d35b7961&v=4"
            );

        msg.channel.send(donateEmbed);
    },
};
