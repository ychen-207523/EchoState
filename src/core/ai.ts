import { Action, Character, Scenario } from "./types";
import { ActionDecider, ActionDecisionInput } from "./model";

export type ActionDeciderKind = "rule-based";

function buildRuleBasedAction(
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
      tone: "sharp and defensive",
      message: `Stop pretending you understand what this is costing me, ${otherCharacter.name}.`,
    };
  }

  if (scenario.worldState.pressure >= 5) {
    return {
      type: "persuade",
      actorId: character.id,
      targetId: otherCharacter.id,
      reason: `${character.name} tries to regain control of the situation.`,
      tone: "controlled but strained",
      message: `Listen to me, ${otherCharacter.name}. If we keep panicking, we will make this worse.`,
    };
  }

  return {
    type: "support",
    actorId: character.id,
    targetId: otherCharacter.id,
    reason: `${character.name} tries to lower tension for now.`,
    tone: "gentle but cautious",
    message: `I am not your enemy, ${otherCharacter.name}. I am trying to hold this together with you.`,
  };
}

export class RuleBasedActionDecider implements ActionDecider {
  chooseAction(input: ActionDecisionInput): Action {
    return buildRuleBasedAction(input.scenario, input.character);
  }
}

export function createActionDecider(
  kind: ActionDeciderKind,
): ActionDecider {
  switch (kind) {
    case "rule-based":
      return new RuleBasedActionDecider();
    default:
      throw new Error(`Unsupported action decider kind: ${kind}`);
  }
}
