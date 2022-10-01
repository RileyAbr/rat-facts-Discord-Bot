import { ApplicationCommandType, Client, CommandInteraction } from 'discord.js'
import { Command } from '../../Command'
import greatScript from '../../data/chasing.json'

export const great: Command = {
  name: 'great',
  description: 'Sponsored by the Honda Ratccord',
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    const content = `> *${greatScript}* -Yiliang "DoubleRat" Peng`

    await interaction
      .followUp({ content })
      .then()
      .catch(error => console.error(`ERROR: ${error}`))
  },
}
