const ratFortunes = require("../../data/fortunes.json");

module.exports = {
    name: "8ball",
    commandUsage: "!rat 8ball {question}",
    description: "The bot predicts your future",
    execute(msg, args) {
        if (args.length < 1) {
            msg.channel.send(
                "> 🐀🔮 **The o-rat-cle says:** Please submit a question."
            );
        }

        // Checks if the extra arguements provided was actually a question
        const lastWord = args[args.length - 1];
        const lastLetterOfLastWord = lastWord.charAt(lastWord.length - 1);

        if (lastLetterOfLastWord === "?") {
            msg.channel.send(
                `> 🐀🔮 **The o-rat-cle says:** ${
                    ratFortunes[
                        Math.floor(Math.random() * [ratFortunes.length])
                    ]
                }`
            );
        } else {
            msg.channel.send(
                "> 🐀🔮 **The o-rat-cle says:** Please submit a question."
            );
        }
    },
};
