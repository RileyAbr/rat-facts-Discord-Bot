import { Client, GatewayIntentBits } from 'discord.js'
import * as dotenv from 'dotenv'

dotenv.config()

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
  ],
})

type CountableGuilds = {
  name: string
  members: number
  dateAdded: string
}

client.on('ready', async () => {
  let guildTracker: CountableGuilds[] = []
  let guildCount = 0

  for (const guildData of client.guilds.cache) {
    const guild = guildData[1]

    guildCount++

    const ratFactsBot = await guild.members.fetchMe()
    const ratFactsAddDate = await ratFactsBot.joinedAt

    guildTracker.push({
      name: guild.name,
      members: guild.memberCount,
      dateAdded: ratFactsAddDate?.toLocaleDateString() || '01-01-1970',
    })
  }

  // By Add Date
  guildTracker.sort(
    (a, b) => new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime(),
  )

  // By Member Count
  //   guildTracker.sort((a, b) => b.members - a.members)

  console.table(guildTracker)
  console.info(`I am currently in-use in ${guildCount} servers!`)
  console.info(
    `The largest server has ${Math.max(
      ...guildTracker.map(guild => guild.members),
    )}`,
  )
  console.info(
    `The oldest rat facts bot was added in ${Math.min(
      ...guildTracker.map(guild => new Date(guild.dateAdded).getTime()),
    )}`,
  )

  process.exit(1)
})

if (process.env.NODE_ENV === 'production') {
  console.info('🚨 Starting Prod')
  client.login(process.env.BOT_TOKEN)
} else {
  console.info('🔧 Starting Dev')
  client.login(process.env.DEV_BOT_TOKEN)
}
