import { Client, CommandInteraction } from 'discord.js'
import { Commands } from '../Commands'

export default (client: Client): void => {
  client.on('interactionCreate', async interaction => {
    if (interaction.isCommand()) {
      await handleSlashCommand(client, interaction)
    }
  })
}

const handleSlashCommand = async (
  client: Client,
  interaction: CommandInteraction,
): Promise<void> => {
  const slashCommand = Commands.find(c => c.name === interaction.commandName)
  if (!slashCommand) {
    interaction.followUp({
      content: 'An error has occurred. Try the help command!',
    })
    return
  }

  await interaction.deferReply()

  slashCommand.run(client, interaction)
}
