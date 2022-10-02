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

type CountableGuild = {
  name: string
  members: number
  dateAdded: string
}

client.on('ready', async () => {
  let guildCount = 0

  const guildTracker: CountableGuild[] = await Promise.all(
    client.guilds.cache.map(async guild => {
      guildCount++

      const ratFactsBot = await guild.members.fetchMe()
      const ratFactsAddDate = await ratFactsBot.joinedAt

      return {
        name: guild.name,
        members: guild.memberCount,
        dateAdded: ratFactsAddDate?.toLocaleDateString() || '01-01-1970',
      }
    }),
  )

  // By Add Date
  guildTracker.sort(
    (a, b) => new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime(),
  )

  // By Member Count
  //   guildTracker.sort((a, b) => b.members - a.members)

  console.table(guildTracker)
  console.info(`rat facts is in-use in ${guildCount} servers!`)
  console.info(
    `The largest server has ${Math.max(
      ...guildTracker.map(guild => guild.members),
    )} members`,
  )
  console.info(
    `${guildTracker.reduce(
      (partialSum, guild) => partialSum + guild.members,
      0,
    )} total members are served by rat facts`,
  )
  console.info(
    `The oldest rat facts bot was added on ${new Date(
      Math.min(
        ...guildTracker.map(guild => new Date(guild.dateAdded).getTime()),
      ),
    ).toLocaleDateString()}`,
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
