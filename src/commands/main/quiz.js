// Load all rat facts
// The questions are stored in a format of
const ratQuestions = require("./questions");
const { Message } = require("discord.js");

function convertReactionToBoolean(reactionEmoji) {
    if (reactionEmoji === "✅") return true;
    else if (reactionEmoji === "❎") return false;
    return undefined;
}

module.exports = {
    name: "quiz",
    description: "Asks a true/false rat question",
    execute(msg, args) {
        const quizQuestion =
            ratQuestions[Math.floor(Math.random() * [ratQuestions.length])];

        const filter = (reaction, user) => {
            return reaction.emoji.name === "✅"; //|| reaction.emoji.name === "❎";
        };

        msg.channel
            .send(`> True or false? ${quizQuestion.question}`)
            .then((msgQuestion) => {
                msgQuestion.react("✅");
                msgQuestion.react("❎");
                msgQuestion
                    .awaitReactions(filter, {
                        max: 3,
                        time: 10000,
                        errors: ["time"],
                    })
                    .then((collected) => {
                        // Because only one response is collected, only the first reaction is needed
                        answer = convertReactionToBoolean(collected.firstKey());
                        console.info(answer);
                        console.info(quizQuestion.answer);

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
