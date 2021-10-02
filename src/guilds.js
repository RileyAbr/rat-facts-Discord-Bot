const Discord = require("discord.js");

// Holds the super-secret token for the bot in an external .env file
// Only used for development, in production the BOT_TOKEN is set through the provider
require("dotenv").config();

// Create the bot and set up it's commands
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require("./commands/index");

// Executed when the bot first connects to the server
bot.on("ready", () => {
    let guildCount = 0;
    bot.guilds.cache.forEach((guild) => {
        guildCount++;
        console.info(guild.name);
    });
    console.info("---------");
    console.info(`Logged in as ${bot.user.tag}`);
    console.info(`I am currently in-use in ${guildCount} servers`);
});

bot.login(process.env.BOT_TOKEN);
