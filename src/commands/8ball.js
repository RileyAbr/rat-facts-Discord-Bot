// Load all fortunes
const ratFortunes = require("./fortunes");

module.exports = {
    name: "8ball",
    description: "The bot predicts your future",
    execute(msg, args) {
        if (args.length < 1) {
            msg.channel.send(
                "> 🐀🔮 **The o-rat-le says:** Please submit a question."
            );
        }

        const lastWord = args[args.length - 1];
        const lastLetterOfLastWord = lastWord.charAt(lastWord.length - 1);

        if (lastLetterOfLastWord == "?") {
            msg.channel.send(
                `> 🐀🔮 **The o-rat-le says:** ${
                    ratFortunes[
                        Math.floor(Math.random() * [ratFortunes.length])
                    ]
                }`
            );
        } else {
            msg.channel.send(
                "> 🐀🔮 **The o-rat-le says:** Please submit a question."
            );
        }
    },
};
