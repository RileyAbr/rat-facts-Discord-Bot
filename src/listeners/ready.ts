import { Client } from 'discord.js'
import { Commands } from '../Commands'

export default (client: Client): void => {
  client.on('ready', async () => {
    if (!client.user || !client.application) {
      return
    }

    await client.application.commands.set(Commands)

    let guildCount = 0
    await Promise.all(client.guilds.cache.map(async () => guildCount++))

    let isHelpActivity = true
    client.user.setActivity('Try /help!')

    setInterval(() => {
      if (isHelpActivity) {
        client?.user?.setActivity(`in ${guildCount} servers!`)
        isHelpActivity = false
      } else {
        client?.user?.setActivity('Try /help!')
        isHelpActivity = true
      }
    }, 14000)

    console.info(`Logged in as ${client.user.tag}`)
  })
}
