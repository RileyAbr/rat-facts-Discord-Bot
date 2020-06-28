module.exports = {
    name: "role2",
    description:
        "Become a different kind of rat. Use again to no longer be a rat2",
    execute(msg, args) {
        // Checks for an existing rat role on the server
        let ratRole = msg.guild.roles.cache.find(
            (role) => role.name.toLowerCase() === "rat2"
        );

        if (ratRole) {
            if (msg.member.roles.cache.has(ratRole.id)) {
                msg.member.roles.remove(ratRole);
                msg.reply("You are no longer with the rat2's  👋");
            } else {
                msg.member.roles.add(ratRole);
                msg.reply("Welcome to the clan of rat2!  🎉");
            }
            //
        } else {
            msg.channel.send(
                "> A `rat2` role has not been added to this server. Contact your server admin!"
            );
        }
    },
};
