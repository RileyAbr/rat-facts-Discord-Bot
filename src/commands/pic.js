const Discord = require("discord.js");

const picCaptions = require("./picCaptions.json");
const ratPics = require("./pics.json");

module.exports = {
    name: "pic",
    description: "Shows off a picture of a rat",
    execute(msg, args) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setTitle(
                picCaptions[Math.floor(Math.random() * [picCaptions.length])]
            )
            .setImage(
                ratPics[Math.floor(Math.random() * [picCaptions.length])]
            );

        msg.channel.send(exampleEmbed);
    },
};
