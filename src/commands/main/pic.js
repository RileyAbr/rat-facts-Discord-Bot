const Discord = require("discord.js");

const picCaptions = require("../../data/picCaptions.json");
const ratPics = require("../../data/pics.json");

module.exports = {
    name: "pic",
    commandUsage: "!rat pic",
    description: "Shows off a picture of a rat",
    execute(msg, args) {
        const picEmbed = new Discord.MessageEmbed()
            .setColor("#66757f")
            .setTitle(
                picCaptions[Math.floor(Math.random() * [picCaptions.length])]
            )
            .setImage(
                ratPics[Math.floor(Math.random() * [picCaptions.length])]
            );

        msg.channel.send(picEmbed);
    },
};
