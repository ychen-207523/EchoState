import { resolveAction } from "./engine";
import { Action, Scenario, TurnResult } from "./types";

export interface SceneRunResult {
  finalScenario: Scenario;
  turnResults: TurnResult[];
}

export function runScene(
  scenario: Scenario,
  actions: Action[],
): SceneRunResult {
  let currentScenario = scenario;
  const turnResults: TurnResult[] = [];

  for (const action of actions) {
    const result = resolveAction(currentScenario, action);

    turnResults.push(result);

    currentScenario = {
      ...currentScenario,
      worldState: result.worldState,
      relationships: result.relationships,
    };
  }

  return {
    finalScenario: currentScenario,
    turnResults,
  };
}
