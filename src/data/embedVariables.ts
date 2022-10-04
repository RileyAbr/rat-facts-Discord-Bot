import { EmbedFooterOptions } from 'discord.js'

export const embedColor = '#66757f'

export const embedThumbnail =
  'https://raw.githubusercontent.com/RileyAbr/rat-facts-Discord-Bot/main/rat_logo.png'

export const embedAttributionFooter: EmbedFooterOptions = {
  text: 'rat facts created by Riley Abrahamson',
  iconURL:
    'https://avatars3.githubusercontent.com/u/32375220?s=460&u=a375968682555bb66226556bf7ee33d6d35b7961&v=4',
}

const packageDirectory = __dirname.replace(/\\([^\\]+\\[^\\]+)$/, '')

export const version = require(packageDirectory + '/package.json').version
export const repoUrl = 'https://github.com/RileyAbr/rat-facts-Discord-Bot/'
export const releaseLink = `${repoUrl}releases/tag/v${version}`
