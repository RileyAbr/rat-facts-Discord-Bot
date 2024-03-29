import { ApplicationCommandType, Client, CommandInteraction } from 'discord.js'
import { Command } from '../Command'

export const role: Command = {
  name: 'role',
  description: 'Become a rat. Use again to no longer be a rat',
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    const member = await interaction.guild?.members.fetch(interaction.user.id)
    const ratRole = await interaction.guild?.roles.cache.find(
      role => role.name.toLowerCase() === 'rat',
    )

    let content = ''

    if (ratRole) {
      if (member?.roles.cache.has(ratRole.id)) {
        member.roles
          .remove(ratRole)
          .then()
          .catch(error => {
            interaction.followUp(
              `Sorry! \`rat facts\` does not have role permissions`,
            )
            console.error(`ERROR: ${error}`)
          })
        content = '> You are no longer a rat 👋'
      } else {
        member?.roles
          .add(ratRole)
          .then()
          .catch(error => {
            interaction.followUp(
              `Sorry! \`rat facts\` does not have role permissions`,
            )
            console.error(`ERROR: ${error}`)
          })
        content = '> Welcome to the rats! 🎉'
      }
    } else {
      try {
        const newRatRole = await interaction.guild?.roles
          .create({
            name: 'rat',
            reason: 'rat facts bot created this role',
          })
          .then()
          .catch(error => {
            interaction.followUp(
              `Sorry! \`rat facts\` does not have role permissions`,
            )
            console.error(`ERROR: ${error}`)
          })

        if (newRatRole) {
          member?.roles
            .add(newRatRole)
            .then()
            .catch(error => {
              interaction.followUp(
                `Sorry! \`rat facts\` does not have role permissions`,
              )
              console.error(`ERROR: ${error}`)
            })
          content = '> `rat` role was created! Welcome to the rats! 🎉'
        } else {
          content =
            '> `rat facts` could not create a `rat` role. Contact your server admin!'
        }
      } catch {
        content =
          '> `rat facts` could not create a `rat` role. Contact your server admin!'
      }
    }

    await interaction
      .followUp({ content })
      .then()
      .catch(error => console.error(`ERROR: ${error}`))
  },
}
