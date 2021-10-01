module.exports = {
    name: "role",
    description: "Become a rat. Use again to no longer be a rat",
    execute(msg, args) {
        // Checks for an existing rat role on the server
        let ratRole = msg.guild.roles.cache.find(
            (role) => role.name.toLowerCase() === "rat"
        );

        if (ratRole) {
            if (msg.member.roles.cache.has(ratRole.id)) {
                msg.member.roles.remove(ratRole);
                msg.reply("You are no longer a rat  👋");
            } else {
                msg.member.roles.add(ratRole);
                msg.reply("Welcome to the rats!  🎉");
            }
        } else {
            try {
                msg.guild.roles.create({
                    data: {
                        name: "rat",
                        color: "GRAY",
                    },
                    reason: "rat facts created this role",
                });

                msg.channel.send(
                    "> `rat` role was created! Please run `rat role` again to become a rat."
                );
            } catch {
                msg.channel.send(
                    "> `rat facts` could not create a `rat` role. Contact your server admin!"
                );
            }
        }
    },
};
