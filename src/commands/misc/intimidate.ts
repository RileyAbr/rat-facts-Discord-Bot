import {
  ApplicationCommandType,
  Client,
  CommandInteraction,
  EmbedBuilder,
} from 'discord.js'
import { Command } from '../../Command'
import { embedColor } from '../../data/embedVariables'

export const intimidate: Command = {
  name: 'intimidate',
  description: 'Displays an intimidating rat',
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    const intimidateEmbed = new EmbedBuilder()
      .setColor(embedColor)
      .setTitle('Reconsider.')
      .setImage(
        'https://raw.githubusercontent.com/RileyAbr/rat-facts-Discord-Bot/master/assets/rat_pics/rat_intimidate.jpeg',
      )

    await interaction
      .followUp({ embeds: [intimidateEmbed] })
      .then()
      .catch(error => console.error(`ERROR: ${error}`))
  },
}
