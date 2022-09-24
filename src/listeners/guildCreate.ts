import { Client } from 'discord.js'

export default (client: Client): void => {
  client.on('guildCreate', async guild => {
    console.info(`Added to a new server! ${guild.name}`)
  })
}
