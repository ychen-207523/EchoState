import { Action, Character, Scenario } from "./types";

export interface ActionDecisionInput {
  scenario: Scenario;
  character: Character;
}

export interface ActionDecider {
  chooseAction(input: ActionDecisionInput): Promise<Action> | Action;
}
