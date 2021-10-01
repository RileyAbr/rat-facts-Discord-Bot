module.exports = {
    name: "role2",
    description:
        "Become a different kind of rat. Use again to no longer be a rat2",
    execute(msg, args) {
        // Checks for an existing rat2 role on the server
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
        } else {
            try {
                msg.guild.roles.create({
                    data: {
                        name: "rat2",
                        color: "GRAY",
                    },
                    reason: "rat facts created this role",
                });

                msg.channel.send(
                    "> `rat2` role was created! Please run `!rat role2` again to become a rat."
                );
            } catch {
                msg.channel.send(
                    "> `rat facts` could not create a `rat2` role. Contact your server admin!"
                );
            }
        }
    },
};
