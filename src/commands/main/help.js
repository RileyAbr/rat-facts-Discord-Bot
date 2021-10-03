const Discord = require("discord.js");
const ratFact = require("./fact");
const ratPic = require("./pic");
const ratJoke = require("./joke");
const rat8Ball = require("./8ball");
const ratQuiz = require("./quiz");
const ratRole = require("./role");
const ratLore = require("./lore");
const ratAuthor = require("./author");
const ratDonate = require("./donate");
const ratMisc = require("../misc/misc");

module.exports = {
    name: "help",
    commandUsage: "!rat help",
    description: "Lists all of the commands available",
    execute(msg, args) {
        const helpEmbed = new Discord.MessageEmbed()
            .setColor("#66757f")
            .setTitle("!rat commands")
            .setThumbnail(
                "https://raw.githubusercontent.com/RileyAbr/rat-facts-Discord-Bot/master/rat_logo.png"
            )
            .addFields(
                {
                    name: ratFact.commandUsage,
                    value: ratFact.description,
                },
                {
                    name: ratPic.commandUsage,
                    value: ratPic.description,
                },
                {
                    name: ratJoke.commandUsage,
                    value: ratJoke.description,
                },
                {
                    name: rat8Ball.commandUsage,
                    value: rat8Ball.description,
                },
                {
                    name: ratQuiz.commandUsage,
                    value: ratQuiz.description,
                },
                {
                    name: ratRole.commandUsage,
                    value: ratRole.description,
                },
                {
                    name: ratLore.commandUsage,
                    value: ratLore.description,
                },
                {
                    name: ratAuthor.commandUsage,
                    value: ratAuthor.description,
                },
                {
                    name: this.commandUsage,
                    value: this.description,
                },
                {
                    name: ratDonate.commandUsage,
                    value: ratDonate.description,
                },
                {
                    name: ratMisc.commandUsage,
                    value: ratMisc.description,
                }
            )
            .setFooter(
                "rat facts created by Riley Abrahamson",
                "https://avatars3.githubusercontent.com/u/32375220?s=460&u=a375968682555bb66226556bf7ee33d6d35b7961&v=4"
            );

        msg.channel.send(helpEmbed);
    },
};
