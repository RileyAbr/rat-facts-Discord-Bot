const Discord = require("discord.js");

module.exports = {
    name: "train",
    description: "Sends out a train of rats. Choo choo!",
    execute(msg, args) {
        const trainEmbed = new Discord.MessageEmbed()
            .setColor("#66757f")
            .setTitle("All board! 🚂🐀🐀🐀")
            .setImage(
                "https://raw.githubusercontent.com/RileyAbr/rat-facts-Discord-Bot/master/assets/rat_pics/rat_train.gif"
            )
            .setFooter("Credit to the Jerma Discord server for the emote");

        msg.channel.send(trainEmbed);
    },
};
