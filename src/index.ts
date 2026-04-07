import { runScene } from "./core/loop";
import { Action } from "./core/types";
import { demoScenario } from "./scenarios/demo";

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

const result = runScene(demoScenario, actions);

console.log("Turn Results:", result.turnResults);
console.log("Final Scenario:", result.finalScenario);
