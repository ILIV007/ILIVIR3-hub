export interface TechItem {
  id: string
  title: string
  category: string
  date: string
}

export const techFeed: TechItem[] = [
  { id: '1', title: 'GPT-5 Architecture Leaks', category: 'AI', date: '2025-01-15' },
  { id: '2', title: 'React 19 Server Components', category: 'Frontend', date: '2025-01-10' },
]
