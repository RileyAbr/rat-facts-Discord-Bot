import { Client } from 'discord.js'

export default (client: Client): void => {
  client.on('ready', async () => {
    if (!client.user || !client.application) {
      return
    }

    client.user.setActivity('!rat help')

    console.info(`Logged in as ${client.user.tag}`)
  })
}
