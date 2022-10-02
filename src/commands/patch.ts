import {
  ApplicationCommandType,
  Client,
  CommandInteraction,
  EmbedBuilder,
} from 'discord.js'
import fs from 'fs'
import { Command } from '../Command'
import {
  embedAttributionFooter,
  embedColor,
  embedThumbnail,
  releaseLink,
  version,
} from '../data/embedVariables'

export const patch: Command = {
  name: 'patch',
  description: 'Shows most recent patch notes',
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    const currentPatchNotes = fs
      .readFileSync(`./release_notes/v${version}.md`, 'utf8')
      // These replaces filter out the markdown headings and change them bold. They are down individually so different styles can be applied to different levels
      .replace(/^# (.*$)/gim, '**$1**')
      .replace(/^## (.*$)/gim, '**$1**')
      .replace(/^### (.*$)/gim, '**$1**')
      .replace(/^#### (.*$)/gim, '**$1**')

    const patchEmbed = new EmbedBuilder()
      .setColor(embedColor)
      .setTitle(`${version} Release Notes`)
      .setURL(releaseLink)
      .setDescription(currentPatchNotes)
      .setThumbnail(embedThumbnail)
      .setFooter(embedAttributionFooter)

    await interaction
      .followUp({ embeds: [patchEmbed] })
      .then()
      .catch(error => console.error(`ERROR: ${error}`))
  },
}
