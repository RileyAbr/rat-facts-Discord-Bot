import {
  ApplicationCommandOptionType,
  ApplicationCommandType,
  Client,
  CommandInteraction,
} from 'discord.js'
import { Command } from '../Command'
import ratFortunes from '../data/fortunes.json'

export const eightBall: Command = {
  name: '8ball',
  description: 'The bot predicts your future',
  type: ApplicationCommandType.ChatInput,
  options: [
    {
      name: 'question',
      description: 'A question for the bot to answer',
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],
  run: async (client: Client, interaction: CommandInteraction) => {
    const user = interaction.user.username
    const question = interaction.options.get('question')?.value

    let content = ''

    if (!question || typeof question !== 'string') {
      content = `> 🐀🔮 **The o-rat-cle says:** Please submit a question.`
    } else {
      const isQuestion = question.charAt(question.length - 1) === '?'

      content = isQuestion
        ? `> **${user}:** "${question}"
        
        > 🐀🔮 **The o-rat-cle says:** ${
          ratFortunes[Math.floor(Math.random() * ratFortunes.length)]
        }`
        : '> 🐀🔮 **The o-rat-cle says:** Please submit a question.'
    }

    await interaction
      .followUp({ content })
      .then()
      .catch(error => console.error(`ERROR: ${error}`))
  },
}
