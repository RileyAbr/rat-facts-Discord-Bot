module.exports = {
    name: "fact",
    description: "Sends a fact about rats!",
    execute(msg, args) {
        msg.channel.send(`Did you know?`);
    },
};
