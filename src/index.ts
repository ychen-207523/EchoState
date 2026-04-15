import { chooseAction } from "./core/agent";
import { runScene } from "./core/loop";
import { demoScenario } from "./scenarios/demo";

console.log("Scenario:", demoScenario.title);

const wife = demoScenario.characters.find((character) => character.id === "wife");

if (!wife) {
  throw new Error("Could not find the wife character in the demo scenario.");
}

const firstAction = chooseAction(demoScenario, wife);
const firstRun = runScene(demoScenario, [firstAction]);

const mother = firstRun.finalScenario.characters.find(
  (character) => character.id === "mother",
);

if (!mother) {
  throw new Error("Could not find the mother character in the updated scenario.");
}

const secondAction = chooseAction(firstRun.finalScenario, mother);
const secondRun = runScene(firstRun.finalScenario, [secondAction]);

console.log("First Turn:", firstRun.turnResults[0]);
console.log("Second Turn:", secondRun.turnResults[0]);
console.log("Final Scenario:", secondRun.finalScenario);
