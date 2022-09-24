import { Client, GatewayIntentBits } from 'discord.js'
import * as dotenv from 'dotenv'

dotenv.config()

const bot = new Client({
  intents: [GatewayIntentBits.Guilds],
})

if (process.env.NODE_ENV === 'production') {
  console.info('🚨 Starting Prod')
  bot.login(process.env.BOT_TOKEN)
} else {
  console.info('🔧 Starting Dev')
  bot.login(process.env.DEV_BOT_TOKEN)
}
