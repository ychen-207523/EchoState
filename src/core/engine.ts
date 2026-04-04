import { Action, RelationshipState, Scenario, TurnResult } from "./types";

function updateRelationshipTrust(
  relationships: RelationshipState[],
  action: Action,
): RelationshipState[] {
  return relationships.map((relationship) => {
    if (
      relationship.fromCharacterId !== action.targetId ||
      relationship.toCharacterId !== action.actorId
    ) {
      return relationship;
    }

    const trustDeltaByAction = {
      persuade: -1,
      accuse: -2,
      support: 2,
    } as const;

    return {
      ...relationship,
      trust: relationship.trust + trustDeltaByAction[action.type],
    };
  });
}

function updatePressure(currentPressure: number, action: Action): number {
  const pressureDeltaByAction = {
    persuade: 1,
    accuse: 2,
    support: -1,
  } as const;

  return Math.max(0, currentPressure + pressureDeltaByAction[action.type]);
}

export function resolveAction(scenario: Scenario, action: Action): TurnResult {
  const nextWorldState = {
    ...scenario.worldState,
    round: scenario.worldState.round + 1,
    pressure: updatePressure(scenario.worldState.pressure, action),
  };

  const nextRelationships = updateRelationshipTrust(
    scenario.relationships,
    action,
  );

  return {
    action,
    summary: `${action.actorId} chose to ${action.type} ${action.targetId}.`,
    worldState: nextWorldState,
    relationships: nextRelationships,
  };
}
