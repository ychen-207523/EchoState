import { RuleBasedActionDecider } from "./core/ai";
import { runScene } from "./core/loop";
import { TurnResult } from "./core/types";
import { demoScenario } from "./scenarios/demo";

function printTurnResult(turnResult: TurnResult): void {
  console.log(`Round ${turnResult.worldState.round}`);
  console.log(`Actor: ${turnResult.action.actorId}`);
  console.log(`Action: ${turnResult.action.type}`);
  console.log(`Tone: ${turnResult.action.tone ?? "none"}`);
  console.log(`Reason: ${turnResult.action.reason}`);
  console.log(`Message: ${turnResult.action.message ?? "none"}`);
  console.log(`Pressure: ${turnResult.worldState.pressure}`);
  console.log("Relationships:", turnResult.relationships);
  console.log("---");
}

console.log(`Scenario: ${demoScenario.title}`);
console.log(demoScenario.description);
console.log("===");

const decider = new RuleBasedActionDecider();
const wife = demoScenario.characters.find((character) => character.id === "wife");

if (!wife) {
  throw new Error("Could not find the wife character in the demo scenario.");
}

const firstAction = decider.chooseAction({
  scenario: demoScenario,
  character: wife,
});
const firstRun = runScene(demoScenario, [firstAction]);

const mother = firstRun.finalScenario.characters.find(
  (character) => character.id === "mother",
);

if (!mother) {
  throw new Error("Could not find the mother character in the updated scenario.");
}

const secondAction = decider.chooseAction({
  scenario: firstRun.finalScenario,
  character: mother,
});
const secondRun = runScene(firstRun.finalScenario, [secondAction]);

printTurnResult(firstRun.turnResults[0]);
printTurnResult(secondRun.turnResults[0]);
console.log("Final Pressure:", secondRun.finalScenario.worldState.pressure);
