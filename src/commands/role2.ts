import { ApplicationCommandType, Client, CommandInteraction } from 'discord.js'
import { Command } from '../Command'

export const role2: Command = {
  name: 'role2',
  description:
    'Become a different kind of rat. Use again to no longer be a rat2',
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    const member = await interaction.guild?.members.fetch(interaction.user.id)
    const ratRole2 = await interaction.guild?.roles.cache.find(
      role => role.name.toLowerCase() === 'rat2',
    )

    let content = ''

    if (ratRole2) {
      if (member?.roles.cache.has(ratRole2.id)) {
        member.roles
          .remove(ratRole2)
          .then()
          .catch(error => {
            interaction.followUp(
              `Sorry! \`rat facts\` does not have role permissions`,
            )
            console.error(`ERROR: ${error}`)
          })
        content = "> You are no longer with the rat2's 👋"
      } else {
        member?.roles
          .add(ratRole2)
          .then()
          .catch(error => {
            interaction.followUp(
              `Sorry! \`rat facts\` does not have role permissions`,
            )
            console.error(`ERROR: ${error}`)
          })
        content = '> Welcome to the clan of rat2! 🎉'
      }
    } else {
      try {
        const newRatRole2 = await interaction.guild?.roles
          .create({
            name: 'rat2',
            reason: 'rat facts bot created this role',
          })
          .then()
          .catch(error => {
            interaction.followUp(
              `Sorry! \`rat facts\` does not have role permissions`,
            )
            console.error(`ERROR: ${error}`)
          })

        if (newRatRole2) {
          member?.roles
            .add(newRatRole2)
            .then()
            .catch(error => {
              interaction.followUp(
                `Sorry! \`rat facts\` does not have role permissions`,
              )
              console.error(`ERROR: ${error}`)
            })
          content = '> `rat2` role was created! Welcome to the clan of rat2! 🎉'
        } else {
          content =
            '> `rat facts` could not create a `rat2` role. Contact your server admin!'
        }
      } catch {
        content =
          '> `rat facts` could not create a `rat2` role. Contact your server admin!'
      }
    }

    await interaction
      .followUp({ content })
      .then()
      .catch(error => console.error(`ERROR: ${error}`))
  },
}
