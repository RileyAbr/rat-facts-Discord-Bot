// Load all rat facts
// The questions are stored in a format of
const ratQuestions = require("./questions");
const Discord = require("discord.js");

function convertReactionToBoolean(reactionEmoji) {
    if (reactionEmoji === "✅") return true;
    else if (reactionEmoji === "❎") return false;
    return undefined;
}

module.exports = {
    name: "quiz",
    description: "Asks a true/false rat question",
    execute(msg, args) {
        const originalAuthor = msg.author.id;

        const quizQuestion =
            ratQuestions[Math.floor(Math.random() * [ratQuestions.length])];

        const reactionEmojis = ["✅", "❎"];

        // Reactions are only accepted if they don't come from a bit, come from the original user, and are in the reaction list
        const filter = (reaction, user) => {
            return (
                !user.bot &&
                user.id === originalAuthor &&
                reactionEmojis.includes(reaction.emoji.name)
            );
        };

        const quizEmbed = new Discord.MessageEmbed()
            .setColor("#66757f")
            .setTitle("🤔 True or False?")
            .setDescription(quizQuestion.question)
            .addFields(
                { name: "\u200B", value: "True: ✅", inline: true },
                { name: "\u200B", value: "False: ✅", inline: true }
            );

        const tacticalEmbed = new Discord.MessageEmbed()
            .setColor("#66757f")
            .setTitle("🔫🐀")
            .setImage(
                "https://raw.githubusercontent.com/RileyAbr/rat-facts-Discord-Bot/master/assets/rat_pics/rat_tactical.jpg"
            );

        msg.channel
            // .send(`> True or false? ${quizQuestion.question}`)
            .send(quizEmbed)
            .then((msgQuestion) => {
                msgQuestion.react("✅");
                msgQuestion.react("❎");
                msgQuestion
                    .awaitReactions(filter, {
                        max: 1,
                        time: 7500,
                        errors: ["time"],
                    })
                    .then((collected) => {
                        // Because only one response is collected, only the first reaction is needed
                        answer = convertReactionToBoolean(collected.firstKey());

                        if (answer === quizQuestion.answer) {
                            msg.reply(
                                `Congratulations! The answer was **${quizQuestion.answer}**`
                            );
                        } else {
                            msg.reply(
                                `Sorry! You answered ${answer}. The answer was **${quizQuestion.answer}**`
                            );
                        }
                    })
                    .catch((collected) => {
                        msg.reply(
                            `Sorry! You took too long to answer. The correct answer is **${quizQuestion.answer}**`
                        );
                    });
            })
            .catch(() => console.error("Error adding reactions to message"));
    },
};
