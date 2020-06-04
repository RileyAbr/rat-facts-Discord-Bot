module.exports = {
    name: "fact",
    description: "Gives a fact about rats",
    execute(msg, args) {
        msg.channel.send(`Did you know? ${"fact"}`);
    },
};
