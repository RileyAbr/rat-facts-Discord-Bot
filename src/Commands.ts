import { Command } from './Command'
import { fact } from './commands/fact'
import { joke } from './commands/joke'
import { pic } from './commands/pic'

export const Commands: Command[] = [fact, pic, joke]
