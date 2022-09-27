import { Command } from './Command'
import { eightBall } from './commands/8ball'
import { author } from './commands/author'
import { donate } from './commands/donate'
import { fact } from './commands/fact'
import { help } from './commands/help'
import { joke } from './commands/joke'
import { pic } from './commands/pic'

export const Commands: Command[] = [
  fact,
  pic,
  joke,
  eightBall,
  author,
  help,
  donate,
]
