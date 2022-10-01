import { ApplicationCommandType, Client, CommandInteraction } from 'discord.js'
import { Command } from '../../Command'

export const anthem: Command = {
  name: 'anthem',
  description: 'Links the anthem of rats',
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    const content = 'https://www.youtube.com/watch?v=OXQwx1EolD8'

    await interaction
      .followUp({ content })
      .then()
      .catch(error => console.error(`ERROR: ${error}`))
  },
}
