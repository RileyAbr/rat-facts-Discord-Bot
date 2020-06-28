module.exports = {
    name: "role",
    description: "Become a rat. Use again to no longer be a rat",
    execute(msg, args) {
        // Checks for an existing rat role on the server
        let ratRole = msg.guild.roles.cache.find(
            (role) => role.name.toLowerCase() === "rat"
        );

        // if (!ratRole) {
        //     ratRole = msg.guild.roles.cache.find((role) => role.name === "Rat");
        // }

        if (ratRole) {
            if (msg.member.roles.cache.has(ratRole.id)) {
                msg.member.roles.remove(ratRole);
                msg.reply("You are no longer a rat  👋");
            } else {
                msg.member.roles.add(ratRole);
                msg.reply("Welcome to the rats!  🎉");
            }
            //
        } else {
            msg.channel.send(
                "> A `rat` role has not been added to this server. Contact your server admin!"
            );
        }
    },
};
