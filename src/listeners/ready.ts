import { Client } from 'discord.js'
import { Commands } from '../Commands'

export default (client: Client): void => {
  client.on('ready', async () => {
    if (!client.user || !client.application) {
      return
    }

    await client.application.commands.set(Commands)

    client.user.setActivity('Try /help!')

    console.info(`Logged in as ${client.user.tag}`)
  })
}
