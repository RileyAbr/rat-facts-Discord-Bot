import {
  ApplicationCommandType,
  Client,
  CommandInteraction,
  EmbedBuilder,
  User,
} from 'discord.js'
import { Command } from '../Command'
import { embedColor } from '../data/embedVariables'
import ratQuestions from '../data/questions.json'

const convertReactionToBoolean = (reactionEmoji: string) => {
  if (reactionEmoji === '✅') return true
  else if (reactionEmoji === '❎') return false
  return undefined
}

export const quiz: Command = {
  name: 'quiz',
  description: 'Asks a true/false rat question',
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    const originalAuthor = interaction.user.id

    const reactionEmojis = ['✅', '❎']

    // Reactions are only accepted if they don't come from a bot, come from the original user, and are in the reaction list
    const filter = (reaction: any, user: User) => {
      return (
        !user.bot &&
        user.id === originalAuthor &&
        reactionEmojis.includes(reaction.emoji.name)
      )
    }

    const quizQuestion =
      ratQuestions[Math.floor(Math.random() * ratQuestions.length)]

    const quizEmbed = new EmbedBuilder()
      .setColor(embedColor)
      .setTitle('🤔 True or False?')
      .setDescription(quizQuestion.question)
      .addFields(
        { name: '\u200B', value: 'True: ✅', inline: true },
        { name: '\u200B', value: 'False: ❎', inline: true },
      )

    await interaction
      .followUp({ embeds: [quizEmbed] })
      .then(async message => {
        await message.react('✅').catch(error => {
          interaction.followUp(
            `Sorry! \`rat facts\` does not have reaction permissions`,
          )
          console.error(`ERROR: ${error}`)
        })
        await message.react('❎').catch(error => {
          console.error(`ERROR: ${error}`)
        })
        const collector = message.createReactionCollector({
          filter: filter,
          max: 1,
          time: 7000,
        })

        let unanswered = true

        collector.on('collect', (reaction, user) => {
          unanswered = false

          const emoji = reaction.emoji.name

          if (emoji) {
            const answer = convertReactionToBoolean(emoji)

            if (answer === quizQuestion.answer) {
              interaction.followUp(
                `Congratulations! The answer was **${quizQuestion.answer}**`,
              )
            } else {
              interaction.followUp(
                `Sorry! You answered ${answer}. The answer was **${quizQuestion.answer}**`,
              )
            }
          }
        })

        collector.on('end', collected => {
          if (unanswered) {
            interaction.followUp(
              `Sorry! You took too long to answer. The correct answer is **${quizQuestion.answer}**`,
            )
          }
        })
      })
      .catch(error => console.error(`ERROR: ${error}`))
  },
}
