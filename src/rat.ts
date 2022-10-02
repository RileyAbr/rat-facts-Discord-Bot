import { Client, GatewayIntentBits } from 'discord.js'
import * as dotenv from 'dotenv'
import guildCreate from './listeners/guildCreate'
import interactionCreate from './listeners/interactionCreate'
import ready from './listeners/ready'

dotenv.config()

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
  ],
})

if (process.env.NODE_ENV === 'production') {
  console.info('🚨 Starting Prod')
  client.login(process.env.BOT_TOKEN)
} else {
  console.info('🔧 Starting Dev')
  client.login(process.env.DEV_BOT_TOKEN)
}

ready(client)
guildCreate(client)
interactionCreate(client)
