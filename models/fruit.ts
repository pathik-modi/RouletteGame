export interface Profiles {
  id: number
  playerName: string
  balance: number
}

export interface UpdateBalance {
  balance: number
}

export interface AddPlayer {
  playerName: string
  balance: number
}
