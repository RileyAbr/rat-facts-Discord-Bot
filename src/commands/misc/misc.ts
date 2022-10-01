import {
  ApplicationCommandOptionType,
  ApplicationCommandType,
  Client,
  CommandInteraction,
  EmbedBuilder,
} from 'discord.js'
import { Command } from 'src/Command'
import {
  embedAttributionFooter,
  embedColor,
  embedThumbnail,
} from '../../data/embedVariables'
import { anthem } from './anthem'
import { great } from './great'
import { intimidate } from './intimidate'
import { ratATatTat } from './ratATatTat'
import { train } from './train'

export const misc: Command = {
  name: 'misc',
  description: 'List small, one-off commands',
  type: ApplicationCommandType.ChatInput,
  options: [
    {
      name: intimidate.name,
      description: intimidate.description,
      type: ApplicationCommandOptionType.Subcommand,
    },
    {
      name: anthem.name,
      description: anthem.description,
      type: ApplicationCommandOptionType.Subcommand,
    },
    {
      name: ratATatTat.name,
      description: ratATatTat.description,
      type: ApplicationCommandOptionType.Subcommand,
    },
    {
      name: great.name,
      description: great.description,
      type: ApplicationCommandOptionType.Subcommand,
    },
    {
      name: train.name,
      description: train.description,
      type: ApplicationCommandOptionType.Subcommand,
    },
    {
      name: 'help',
      description: 'Lists all of the misc commands available to rat facts',
      type: ApplicationCommandOptionType.Subcommand,
    },
  ],
  run: async (client: Client, interaction: CommandInteraction) => {
    const subCommand = interaction.options.data[0].name

    switch (subCommand) {
      case intimidate.name:
        intimidate.run(client, interaction)
        break
      case anthem.name:
        anthem.run(client, interaction)
        break
      case ratATatTat.name:
        ratATatTat.run(client, interaction)
        break
      case great.name:
        great.run(client, interaction)
        break
      case train.name:
        train.run(client, interaction)
        break
      case 'help':
      default:
        const miscEmbed = new EmbedBuilder()
          .setColor(embedColor)
          .setTitle('`rat facts` misc commands')
          .setThumbnail(embedThumbnail)
          .addFields(
            {
              name: '/' + anthem.name,
              value: anthem.description,
            },
            // {
            //   name: ratIntimidate.commandUsage,
            //   value: ratIntimidate.description,
            // },
            // {
            //   name: ratAttattat.commandUsage,
            //   value: ratAttattat.description,
            // },
            // {
            //   name: ratTrain.commandUsage,
            //   value: ratTrain.description,
            // },
            // {
            //   name: ratGreat.commandUsage,
            //   value: ratGreat.description,
            // },
            // {
            //   name: ratVersion.commandUsage,
            //   value: ratVersion.description,
            // },
          )
          .setFooter(embedAttributionFooter)

        await interaction
          .followUp({ embeds: [miscEmbed] })
          .then()
          .catch(error => console.error(`ERROR: ${error}`))
    }
  },
}
