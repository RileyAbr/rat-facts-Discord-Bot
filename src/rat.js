const Discord = require("discord.js");
const fs = require("fs");
const patchEmbed = require("./scripts/createPatchEmbed").patchEmbed;

// Holds the super-secret token for the bot in an external .env file
// Only used for development, in production the BOT_TOKEN is set through the provider
require("dotenv").config();

// The command to summon the bot
const PREFIX = "!rat";

// Create the bot and set up it's commands
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require("./commands/index");

Object.keys(botCommands).map((key) => {
    bot.commands.set(botCommands[key].name, botCommands[key]);
});

// Executed when the bot first connects to the server
bot.on("ready", () => {
    let guildCount = bot.guilds.cache.length;

    bot.user.setActivity("!rat help");
    let showHelpActivity = true;

    setInterval(function () {
        showHelpActivity
            ? bot.user.setActivity("!rat help")
            : bot.user.setActivity(`active in ${guildCount} servers!`);
        showHelpActivity = !showHelpActivity;
    }, 10000);

    const botChannel = bot.channels.cache.find(
        (channel) =>
            channel.type == "text" &&
            (channel.name.toLowerCase().includes("general") ||
                channel.name.toLowerCase().includes("bot"))
    );

    if (botChannel !== undefined) {
        bot.channels.fetch(botChannel.id).then((channel) => {
            channel.send(patchEmbed);
        });
    }

    console.info(`Logged in as ${bot.user.tag}`);
});

// Logs when the bot is invited to a new server
bot.on("guildCreate", (guild) => {
    console.info(`Added to a new server! ${guild.name}`);
});

// Handles all commands sent to the bot
bot.on("message", (msg) => {
    // Ignore message if from self
    if (msg.author.bot) return;

    const args = msg.content.split(/ +/);
    const firstWord = args.shift().toLowerCase();

    // Only process messsages that contain the !rat prefix
    if (firstWord === PREFIX) {
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

if (process.env.NODE_ENV === "production") {
    console.info("🚨 Starting Prod");
    bot.login(process.env.BOT_TOKEN);
} else {
    console.info("🔧 Starting Dev");
    bot.login(process.env.DEV_BOT_TOKEN);
}
