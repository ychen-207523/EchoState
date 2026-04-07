import { resolveAction } from "./core/engine";
import { Action, Scenario } from "./core/types";
import { demoScenario } from "./scenarios/demo";

function applyTurn(scenario: Scenario, action: Action): Scenario {
  const result = resolveAction(scenario, action);

  console.log("Action:", action);
  console.log("Result:", result);

  return {
    ...scenario,
    worldState: result.worldState,
    relationships: result.relationships,
  };
}

console.log("Scenario:", demoScenario.title);

const actions: Action[] = [
  {
    type: "support",
    actorId: "wife",
    targetId: "mother",
    reason: "She wants to calm the conflict before it gets worse.",
  },
  {
    type: "accuse",
    actorId: "mother",
    targetId: "wife",
    reason: "She believes the support is manipulative rather than sincere.",
  },
];

let currentScenario = demoScenario;

for (const action of actions) {
  currentScenario = applyTurn(currentScenario, action);
}
