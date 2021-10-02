const Discord = require("discord.js");

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
    let guildCount = 0;
    bot.guilds.cache.forEach((guild) => {
        guildCount++;
        console.info(guild.name);
    });
    console.info(`Logged in as ${bot.user.tag}`);
    console.info(`I am currently in-use in ${guildCount} servers`);
    bot.user.setActivity("!rat help");
    let showHelpActivity = true;

    setInterval(function () {
        showHelpActivity
            ? bot.user.setActivity("!rat help")
            : bot.user.setActivity(`active in ${guildCount} servers!`);
        showHelpActivity = !showHelpActivity;
    }, 10000);
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

if (process.env.NODE_ENV === "production") {
    console.info("WARNING: Starting Prod");
    bot.login(process.env.BOT_TOKEN);
} else {
    console.info("Starting Dev");
    bot.login(process.env.DEV_BOT_TOKEN);
}
