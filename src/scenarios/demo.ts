import { Scenario } from "../core/types";

export const demoScenario: Scenario = {
  id: "demo-family-conflict",
  title: "Family Conflict",
  description:
    "Two family members argue over a high-stakes decision while tension rises.",
  characters: [
    {
      id: "mother",
      name: "Elena",
      role: "Mother",
      goal: "Protect the family at any cost.",
      fear: "Losing both trust and control.",
      secret: "She has already made a private promise she cannot keep.",
      breakingPoint: 8,
    },
    {
      id: "wife",
      name: "Mina",
      role: "Wife",
      goal: "Keep her partner emotionally and physically safe.",
      fear: "Being treated as less important than the rest of the family.",
      secret: "She is considering leaving if she is betrayed again.",
      breakingPoint: 7,
    },
  ],
  worldState: {
    round: 1,
    pressure: 3,
    facts: ["A decision must be made quickly.", "Nobody fully trusts the other."],
  },
  relationships: [
    {
      fromCharacterId: "mother",
      toCharacterId: "wife",
      trust: 2,
    },
    {
      fromCharacterId: "wife",
      toCharacterId: "mother",
      trust: 1,
    },
  ],
};
