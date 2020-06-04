const Discord = require("discord.js");

//
const { BOT_TOKEN } = require("../config.json");

// The command to summon the bot
const PREFIX = "!rat";

// Create the bot and set up it's commands
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require("./commands");

Object.keys(botCommands).map((key) => {
    bot.commands.set(botCommands[key].name, botCommands[key]);
});

// Executed when the bot first connects to the server
bot.on("ready", () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

// Handles all commands sent to the bot
bot.on("message", (msg) => {
    const args = msg.content.split(/ +/);
    const firstWord = args.shift().toLowerCase();

    // Only process messsages that contain the !rat prefix
    if (firstWord == PREFIX) {
        // Checks whether or not the command request has additional parameters
        // If no command is specified, the default command is a rat fact
        const command = args.length > 0 ? args.shift().toLowerCase() : "fact";

        // See if there is a match in the bot's command list, if not, direct the user toward the help command
        try {
            bot.commands.get(command).execute(msg, args);
        } catch (error) {
            msg.reply("Need help? Try `!rat help`.");
        }
    }
});

// commandHandlerForCommandName["fact"] = (msg, args) => {
//     return msg.channel.createMessage(`Did you know? ${"Rat fact!"}`);
// };

// commandHandlerForCommandName["pic"] = (msg, args) => {
//     return msg.channel.createMessage({
//         embed: {
//             title: "Look at this rat!",
//             image: {
//                 url: "https://i.imgur.com/NxuwF0K.jpg",
//             },
//         },
//     });
// };

// commandHandlerForCommandName[""] = (msg, args) => {
//     return msg.channel.createMessage(`Did you know? ${"test"}`);
// };

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
