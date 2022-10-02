import { ApplicationCommandType, Client, CommandInteraction } from 'discord.js'
import { Command } from '../Command'
import ratJokes from '../data/jokes.json'

export const joke: Command = {
  name: 'joke',
  description: 'Tells a joke about rats',
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    const content = `> ${ratJokes[Math.floor(Math.random() * ratJokes.length)]}`

    await interaction
      .followUp({ content })
      .then()
      .catch(error => console.error(`ERROR: ${error}`))
  },
}
