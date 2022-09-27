import { Command } from './Command'
import { eightBall } from './commands/8ball'
import { author } from './commands/author'
import { fact } from './commands/fact'
import { joke } from './commands/joke'
import { pic } from './commands/pic'

export const Commands: Command[] = [fact, pic, joke, eightBall, author]
