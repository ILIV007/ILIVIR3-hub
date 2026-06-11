export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
  telegram?: string
}

export const projects: Project[] = [
  {
    id: 'ivai',
    title: 'IVAI Bot',
    description: 'Advanced AI-powered Telegram bot with multi-model support',
    tags: ['TypeScript', 'Node.js', 'AI'],
    github: 'https://github.com/ILIV007/IVAI',
    telegram: 'https://t.me/ivai_llm_bot',
  },
  {
    id: 'tradeagent',
    title: 'TradeAgent IV',
    description: 'AI-driven trading analysis and signal system',
    tags: ['React', 'Python', 'Trading'],
    github: 'https://github.com/ILIV007/TradeAgent',
    telegram: 'https://t.me/tradeagentiv',
  },
]
