
interface QuestAttributes {
  label: string
  id: string
}

interface Rewards {
  expPoints: number
  gold: number
}

export interface Quest {
  title: string
  difficulty: number
  description: string
  slug: string
  cover: string
  language: QuestAttributes,
  type: QuestAttributes,
  rewards: Rewards
}
