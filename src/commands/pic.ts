import {
  ApplicationCommandType,
  Client,
  CommandInteraction,
  EmbedBuilder,
} from 'discord.js'
import { Command } from '../Command'
import { embedColor } from '../data/embedVariables'
import picCaptions from '../data/picCaptions.json'
import ratPics from '../data/pics.json'

export const pic: Command = {
  name: 'pic',
  description: 'Shows off a picture of a rat',
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    const picEmbed = new EmbedBuilder()
      .setColor(embedColor)
      .setTitle(picCaptions[Math.floor(Math.random() * picCaptions.length)])
      .setImage(ratPics[Math.floor(Math.random() * picCaptions.length)])

    await interaction
      .followUp({ embeds: [picEmbed] })
      .then()
      .catch(error => console.error(`ERROR: ${error}`))
  },
}
