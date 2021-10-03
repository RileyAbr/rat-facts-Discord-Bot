const Discord = require("discord.js");
const ratIntimidate = require("./intimidate");
const ratAttattat = require("./attattat");
const ratTrain = require("./train");
const ratAnthem = require("./anthem");
const ratGreat = require("./great");
const ratVersion = require("./version");

module.exports = {
    name: "misc",
    commandUsage: "!rat misc",
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
                    name: ratIntimidate.commandUsage,
                    value: ratIntimidate.description,
                },
                {
                    name: ratAttattat.commandUsage,
                    value: ratAttattat.description,
                },
                {
                    name: ratTrain.commandUsage,
                    value: ratTrain.description,
                },
                {
                    name: ratAnthem.commandUsage,
                    value: ratAnthem.description,
                },
                {
                    name: ratGreat.commandUsage,
                    value: ratGreat.description,
                },
                {
                    name: ratVersion.commandUsage,
                    value: ratVersion.description,
                }
            );

        msg.channel.send(miscEmbed);
    },
};
