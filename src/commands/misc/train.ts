import {
  ApplicationCommandType,
  Client,
  CommandInteraction,
  EmbedBuilder,
} from 'discord.js'
import { Command } from '../../Command'
import { embedColor } from '../../data/embedVariables'

export const train: Command = {
  name: 'train',
  description: 'Sends out a train of rats. Choo choo!',
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    const trainEmbed = new EmbedBuilder()
      .setColor(embedColor)
      .setTitle('All board! 🚂🐀🐀🐀')
      .setImage(
        'https://raw.githubusercontent.com/RileyAbr/rat-facts-Discord-Bot/master/assets/rat_pics/rat_train.gif',
      )
      .setFooter({
        text: 'Credit to the Jerma985 Discord server for the emote',
      })

    await interaction
      .followUp({ embeds: [trainEmbed] })
      .then()
      .catch(error => console.error(`ERROR: ${error}`))
  },
}
