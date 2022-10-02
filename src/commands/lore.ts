import {
  ApplicationCommandType,
  Client,
  CommandInteraction,
  EmbedBuilder,
} from 'discord.js'
import { Command } from '../Command'
import { embedColor } from '../data/embedVariables'
import ratLore from '../data/loreScript.json'

export const lore: Command = {
  name: 'lore',
  description: 'Tells the story behind the rat facts bot',
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    const loreEmbed = new EmbedBuilder()
      .setColor(embedColor)
      .setTitle('The lore of rat facts')

    let chapter: keyof typeof ratLore

    for (chapter in ratLore) {
      loreEmbed.addFields({ name: chapter, value: ratLore[chapter] })
    }

    await interaction
      .followUp({ embeds: [loreEmbed] })
      .then()
      .catch(error => console.error(`ERROR: ${error}`))
  },
}
