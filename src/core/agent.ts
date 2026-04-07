import { Action, Character, Scenario } from "./types";

export function chooseAction(
  scenario: Scenario,
  character: Character,
): Action {
  const otherCharacter = scenario.characters.find(
    (candidate) => candidate.id !== character.id,
  );

  if (!otherCharacter) {
    throw new Error(`No target found for character ${character.id}.`);
  }

  if (scenario.worldState.pressure >= character.breakingPoint - 2) {
    return {
      type: "accuse",
      actorId: character.id,
      targetId: otherCharacter.id,
      reason: `${character.name} is close to a breaking point and lashes out.`,
    };
  }

  if (scenario.worldState.pressure >= 5) {
    return {
      type: "persuade",
      actorId: character.id,
      targetId: otherCharacter.id,
      reason: `${character.name} tries to regain control of the situation.`,
    };
  }

  return {
    type: "support",
    actorId: character.id,
    targetId: otherCharacter.id,
    reason: `${character.name} tries to lower tension for now.`,
  };
}
