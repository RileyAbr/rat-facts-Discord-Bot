import {
  ApplicationCommandType,
  Client,
  CommandInteraction,
  EmbedBuilder,
} from 'discord.js'
import { Command } from '../Command'
import { embedColor } from '../data/embedVariables'

export const author: Command = {
  name: 'author',
  description: 'Provides the author and social links for the bot',
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    const authorEmbed = new EmbedBuilder()
      .setColor(embedColor)
      .setTitle('rat facts Discord Bot')
      .setURL('https://github.com/RileyAbr/rat-facts-Discord-Bot')
      .setDescription('Created by Riley Abrahamson.')
      .setThumbnail(
        'https://raw.githubusercontent.com/RileyAbr/rat-facts-Discord-Bot/master/rat_logo.png',
      )
      .addFields({
        name: "Riley's Website",
        value: 'www.rileyabrahamson.com',
      })
      .addFields({
        name: 'Twitter',
        value: '@RileyAbrahamson',
      })
      .addFields({
        name: 'GitHub',
        value: 'RileyAbr',
      })

    await interaction
      .followUp({ embeds: [authorEmbed] })
      .then()
      .catch(error => console.error(`ERROR: ${error}`))
  },
}
