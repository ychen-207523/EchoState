export type CharacterId = string;

export type ActionType = "persuade" | "accuse" | "support";

export interface Character {
  id: CharacterId;
  name: string;
  role: string;
  goal: string;
  fear: string;
  secret: string;
  breakingPoint: number;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  characters: Character[];
  worldState: WorldState;
  relationships: RelationshipState[];
}

export interface WorldState {
  round: number;
  pressure: number;
  facts: string[];
}

export interface RelationshipState {
  fromCharacterId: CharacterId;
  toCharacterId: CharacterId;
  trust: number;
}

export interface Action {
  type: ActionType;
  actorId: CharacterId;
  targetId: CharacterId;
  reason: string;
}

export interface TurnResult {
  action: Action;
  summary: string;
  worldState: WorldState;
  relationships: RelationshipState[];
}
