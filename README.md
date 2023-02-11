# 🐀 rat facts

![Image of rat emoji](https://raw.githubusercontent.com/RileyAbr/rat-facts-Discord-Bot/main/rat_logo.png)

Rat facts is a Discord bot that delivers rat-based content.

![GIF showing off the rat facts bot in action](https://raw.githubusercontent.com/RileyAbr/rat-facts-Discord-Bot/main/assets/rat%20facts%20clip.gif)

## Features

-   Gives random facts about rats (over 100!)
-   Shows off pictures of rats
-   Tells jokes about rats
-   Consults the O-rat-cle to predict your future
-   Take a quiz on your rat knowledge
-   Become labeled a rat yourself
-   Describes the lore beyond a great rat civil war

### Available Commands:

All commands are evoked as slash commands! Type `/` and select a command from below:

-   `/fact`
-   `/pic`
-   `/joke`
-   `/8ball {question}`
-   `/quiz`
-   `/role`
-   `/lore`
-   `/help`
-   `/misc`

## Adding rat facts to a server

[Click here to invite rat facts to your server](https://discord.com/api/oauth2/authorize?client_id=717512371312132188&permissions=2416299072&scope=bot%20applications.commands)

[Check it out on Top.gg!](https://top.gg/bot/717512371312132188)

## Technical Details

Rat facts is built as a [Node.js](https://nodejs.org/en/) project. Additionally, it is written in [TypeScript](https://www.typescriptlang.org/) alongside other developer conveniences like [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) The bot relies heavily on the [Discord.js](https://discord.js.org/#/) module to make working with Discord's API much easier. Much of the information used for the various commands are stored in local JSON files, making them easy to expand with additional facts, jokes, or photos. The bot is hosted on a [BisectHosting](https://www.bisecthosting.com/) instance using their Bot Hosting service.

### Expanding the Bot

If you would like to develop on the bot yourself, simply clone the repo and provide your own credentials. The main file (`rat.js`) reads from a `.env` file for a `BOT_TOKEN`. This will match the bot token generated by Discord when you register the app via the Discord Developer Portal. Fill in your own token and run `npm start` to start the bot **NOTE:** your new bot must be added to your server; the invite link can be generated within the Discord Developer Portal.
