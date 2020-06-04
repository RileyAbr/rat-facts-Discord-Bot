const Discord = require("discord.js");
const { BOT_TOKEN } = require("../config.json");

const PREFIX = "!rat";

const bot = new Discord.Client();
botCommands = require("./commands");

const commandHandlerForCommandName = {};

commandHandlerForCommandName["fact"] = (msg, args) => {
    return msg.channel.createMessage(`Did you know? ${"Rat fact!"}`);
};

commandHandlerForCommandName["pic"] = (msg, args) => {
    return msg.channel.createMessage({
        embed: {
            title: "Look at this rat!",
            image: {
                url: "https://i.imgur.com/NxuwF0K.jpg",
            },
        },
    });
};

commandHandlerForCommandName[""] = (msg, args) => {
    return msg.channel.createMessage(`Did you know? ${"test"}`);
};

bot.on("ready", () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", (msg) => {
    if (msg.content === "ping") {
        msg.reply("pong");
        msg.channel.send("pong");
    } else if (msg.content.startsWith(PREFIX)) {
        msg.channel.send("Did you know? Rat fact!");
    }
});

// bot.on("messageCreate", async (msg) => {
//     const content = msg.content;

//     // Ignore any messages sent as direct messages.
//     // The bot will only accept commands issued in
//     // a guild.
//     if (!msg.channel.guild) {
//         return;
//     }

//     // Ignore any message that doesn't start with the correct prefix.
//     if (!content.startsWith(PREFIX)) {
//         return;
//     }

//     // Extract the name of the command
//     const parts = content
//         .split(" ")
//         .map((s) => s.trim())
//         .filter((s) => s);

//     let commandName = "";

//     if (parts[1] == null) {
//         commandName = "";
//     } else {
//         commandName = parts[1];
//     }

//     // Get the appropriate handler for the command, if there is one.
//     const commandHandler = commandHandlerForCommandName[commandName];

//     // Separate the command arguments from the command prefix and command name.
//     const args = parts.slice(1);

//     try {
//         // Execute the command.
//         await commandHandler(msg, args);
//     } catch (err) {
//         console.warn("Error handling command");
//         console.warn(err);
//     }
// });

// bot.on("error", (err) => {
//     console.warn(err);
// });

// bot.connect();

// Logs the bot into the server
bot.login(BOT_TOKEN);
