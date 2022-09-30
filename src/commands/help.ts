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
import { eightBall } from './8ball'
import { author } from './author'
import { donate } from './donate'
import { fact } from './fact'
import { joke } from './joke'
import { patch } from './patch'
import { pic } from './pic'
import { quiz } from './quiz'

const donateLink = 'https://ko-fi.com/rileyabrahamson'

const helpName = 'help'
const helpDescription = 'Lists all of the commands available to rat facts'

export const help: Command = {
  name: helpName,
  description: helpDescription,
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    const helpEmbed = new EmbedBuilder()
      .setColor(embedColor)
      .setTitle('`rat facts` / commands')
      .setThumbnail(embedThumbnail)
      .addFields(
        {
          name: '/' + fact.name,
          value: fact.description,
        },
        {
          name: '/' + pic.name,
          value: pic.description,
        },
        {
          name: '/' + joke.name,
          value: joke.description,
        },
        {
          name: '/' + eightBall.name + ' [question]',
          value: eightBall.description,
        },
        {
          name: '/' + quiz.name,
          value: quiz.description,
        },
        // {
        //   name: role.name,
        //   value: role.description,
        // },
        // {
        //   name: lore.name,
        //   value: lore.description,
        // },
        {
          name: '/' + author.name,
          value: author.description,
        },
        {
          name: '/' + donate.name,
          value: donate.description,
        },
        {
          name: '/' + patch.name,
          value: patch.description,
        },
        {
          name: '/' + helpName,
          value: helpDescription,
        },

        // {
        //   name: misc.name,
        //   value: misc.description,
        // },
      )
      .setFooter(embedAttributionFooter)

    await interaction
      .followUp({ embeds: [helpEmbed] })
      .then()
      .catch(error => console.error(`ERROR: ${error}`))
  },
}
