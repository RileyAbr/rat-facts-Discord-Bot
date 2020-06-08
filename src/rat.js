const Discord = require("discord.js");

// Holds the super-secret token for the bot in a config file
// Only used for testing
const { CONFIG_BOT_TOKEN, DEV_BOT_TOKEN } = require("../config.json");

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
    bot.user.setActivity("!rat help");
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

// Logs the bot into the server
// Heroku uses process.env.BOT_TOKEN rather than CONFIG_BOT_TOKEN
bot.login(process.env.BOT_TOKEN || DEV_BOT_TOKEN);
