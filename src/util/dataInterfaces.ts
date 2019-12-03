export interface MatchInfo {
  lane: string;
  gameId: number;
  champion: number;
  platformId: string;
  timestamp: number;
  queue: number;
  role: string;
  season: number;
}

export interface QueueTypes {
  queueId: number;
  map: string;
  description: string;
  notes: string;
}
