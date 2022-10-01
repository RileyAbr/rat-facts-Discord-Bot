import { Command } from './Command'
import { eightBall } from './commands/8ball'
import { author } from './commands/author'
import { donate } from './commands/donate'
import { fact } from './commands/fact'
import { help } from './commands/help'
import { joke } from './commands/joke'
import { lore } from './commands/lore'
import { patch } from './commands/patch'
import { pic } from './commands/pic'
import { quiz } from './commands/quiz'
import { role } from './commands/role'
import { role2 } from './commands/role2'

export const Commands: Command[] = [
  fact,
  pic,
  joke,
  eightBall,
  quiz,
  role,
  role2,
  lore,
  author,
  help,
  patch,
  donate,
]
