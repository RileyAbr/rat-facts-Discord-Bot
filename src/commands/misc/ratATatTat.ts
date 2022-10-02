import {
  ApplicationCommandType,
  Client,
  CommandInteraction,
  EmbedBuilder,
} from 'discord.js'
import { Command } from '../../Command'
import { embedColor } from '../../data/embedVariables'

export const ratATatTat: Command = {
  name: 'rat-a-tat-tat',
  description: 'Displays a rat ready to roll out',
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    const tacticalEmbed = new EmbedBuilder()
      .setColor(embedColor)
      .setTitle('🔫🐀')
      .setImage(
        'https://raw.githubusercontent.com/RileyAbr/rat-facts-Discord-Bot/main/assets/rat_pics/rat_tactical.jpg',
      )

    await interaction
      .followUp({ embeds: [tacticalEmbed] })
      .then()
      .catch(error => console.error(`ERROR: ${error}`))
  },
}
