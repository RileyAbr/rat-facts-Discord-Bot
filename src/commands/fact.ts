import { ApplicationCommandType, Client, CommandInteraction } from 'discord.js'
import { Command } from '../Command'
import ratFacts from '../data/facts.json'

export const fact: Command = {
  name: 'fact',
  description: 'Gives a fact about rats',
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    const content = `> **Did you know?** ${
      ratFacts[Math.floor(Math.random() * ratFacts.length)]
    }`

    await interaction
      .followUp({ content })
      .then()
      .catch(error => console.error(`ERROR: ${error}`))
  },
}
