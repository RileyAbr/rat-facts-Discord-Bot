// Load all rat facts
const ratQuestions = require("./questions");

module.exports = {
    name: "quiz",
    description: "Asks a true/false rat question",
    execute(msg, args) {
        msg.react("✅")
            .then(() => msg.react("❎"))
            .catch(() => console.error("One of the emojis failed to add."));
    },
};
