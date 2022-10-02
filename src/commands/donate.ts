import {
  ApplicationCommandType,
  Client,
  CommandInteraction,
  EmbedBuilder,
} from 'discord.js'
import { Command } from '../Command'
import {
  embedAttributionFooter,
  embedColor,
  embedThumbnail,
} from '../data/embedVariables'

const donateLink = 'https://ko-fi.com/rileyabrahamson'

export const donate: Command = {
  name: 'donate',
  description: 'Provides ways to donate to rat facts',
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    const donateEmbed = new EmbedBuilder()
      .setColor(embedColor)
      .setTitle('🧀 Donate to rat facts!')
      .setURL(donateLink)
      .setDescription(
        'All proceeds from donations go towards help to keep `rat facts` running. Donations are not expected, but always appreciated! 🐀',
      )
      .setThumbnail(embedThumbnail)
      .addFields({
        name: 'Kofi',
        value: donateLink,
      })
      .setFooter(embedAttributionFooter)

    await interaction
      .followUp({ embeds: [donateEmbed] })
      .then()
      .catch(error => console.error(`ERROR: ${error}`))
  },
}
