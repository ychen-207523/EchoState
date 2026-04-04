import { resolveAction } from "./core/engine";
import { Action } from "./core/types";
import { demoScenario } from "./scenarios/demo";

const action: Action = {
  type: "support",
  actorId: "wife",
  targetId: "mother",
  reason: "She wants to calm the conflict before it gets worse.",
};

const result = resolveAction(demoScenario, action);

console.log("Scenario:", demoScenario.title);
console.log("Action:", action);
console.log("Result:", result);
