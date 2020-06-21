const Discord = require("discord.js");

module.exports = {
    name: "version",
    description: "Shows the current release of rat facts",
    execute(msg, args) {
        const versionEmbed = new Discord.MessageEmbed()
            .setColor("#66757f")
            .setTitle("rat facts Discord Bot")
            .setThumbnail(
                "https://raw.githubusercontent.com/RileyAbr/rat-facts-Discord-Bot/master/rat_logo.png"
            )
            .addFields({
                name: "Current Release",
                value: "v4.1.0",
            })
            .setFooter(
                "rat facts created by Riley Abrahamson",
                "https://avatars3.githubusercontent.com/u/32375220?s=460&u=a375968682555bb66226556bf7ee33d6d35b7961&v=4"
            );

        msg.channel.send(versionEmbed);
    },
};
