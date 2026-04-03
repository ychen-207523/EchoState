# EchoState

EchoState is a multi-model social simulation game where AI characters with different goals, fears, loyalties, secrets, and model backends argue, adapt, and evolve under user intervention.

The core idea is not "many bots in a chat." The core idea is a simulation engine: characters carry internal state, the world changes over time, the user can interrupt at any moment, and each run can branch into different outcomes.

## Why This Exists

Most multi-agent demos stop at "several assistants talking." EchoState aims to be more interesting than that by turning conversation into a playable system with:

- Stateful characters
- World state and pressure
- User interruptions
- Relationship shifts
- Action turns, not just dialogue
- Judging and scoring
- Branching outcomes
- Memory and callbacks
- Scenario authoring
- Spectator mode
- Multi-model comparison

## Product Direction

EchoState should feel like a mix of:

- social strategy simulator
- multi-agent drama sandbox
- moral conflict engine
- model-vs-model arena

Users can provide a scenario, assign roles, choose which models power which characters, interrupt the simulation with new facts, and watch the scene evolve. The same setup can be replayed with different model lineups to compare how each system behaves under pressure.

## Core Features

### Stateful Characters

Each character should have:

- goals
- fears
- loyalties
- secrets
- negotiation style
- breaking point
- short-term memory
- long-term memory

### World State

A scenario is more than a prompt. It should include:

- facts
- locations
- time pressure
- available resources
- hidden information
- constraints
- consequences

### Interruptions

The user can cut in during a run to:

- inject a new fact
- reveal a secret
- add or remove a character
- change the stakes
- force a vote
- pause the scene
- redirect a character

### Relationship Graph

Characters should dynamically track things like:

- trust
- fear
- loyalty
- resentment
- debt
- dependence

### Action Turns

Agents should do more than speak. They can:

- persuade
- lie
- accuse
- investigate
- ally
- defect
- sacrifice
- vote
- stall
- reveal evidence

### Judging and Scoring

A referee or system layer can evaluate:

- coherence
- persuasion
- consistency
- morality
- survival odds
- public support
- goal progress

### Branching Outcomes

Runs should be replayable and splittable:

- alternate endings
- branch from a prior turn
- compare two model lineups
- inspect why a scene changed direction

### Memory and Callbacks

Characters should remember:

- promises
- betrayals
- threats
- contradictions
- alliances
- past losses

### Scenario Editor

Users should be able to define:

- worlds
- roles
- rules
- starting relationships
- victory conditions
- hidden secrets

### Spectator / Showcase Mode

EchoState should support an auto-run mode where the user can watch a fully simulated scene without manually responding every turn.

## Multi-Model Vision

One of EchoState's strongest hooks is that different characters can be powered by different providers and models.

Examples:

- OpenAI vs Gemini in the same negotiation
- the same role replayed across multiple models
- one cautious model paired against one aggressive model
- comparison of persuasion, empathy, creativity, and consistency

This means EchoState should be designed around a provider-agnostic model adapter layer from the start.

## Technical Direction

Recommended stack:

- TypeScript end-to-end
- Next.js for app and API routes
- React for the UI
- Postgres for scenarios, runs, characters, and event logs
- `pgvector` later for optional memory or lore retrieval
- OpenAI Responses API and other provider SDKs behind a shared adapter interface
- Zod for schemas and validation
- a turn engine / state machine for orchestration

RAG is not the priority. It can be added later for scenario lore, uploaded evidence packs, or deeper memory retrieval, but the first priority is simulation state and action resolution.

## Stage Map

### Phase 1: Make It Alive

Goal: prove the concept is more than chat.

Build:

- scenario setup
- 3 to 5 agents
- visible roles and hidden traits
- goals, fears, loyalties, and secrets
- world facts and time pressure
- round-based dialogue and action turns
- user interruptions
- basic judge or narrator summary
- simple spectator mode
- support for multiple model providers

Success looks like:

- a single scenario can run from start to ending
- the user can interrupt at any time
- agents feel distinct
- two different model lineups produce noticeably different outcomes

### Phase 2: Make It Strategic

Goal: make the simulation feel dynamic and game-like.

Build:

- relationship graph
- trust, fear, debt, and loyalty metrics
- stronger action resolution rules
- contradiction tracking
- dynamic alliances
- force-vote and accusation mechanics
- richer memory
- clearer scoring signals

Success looks like:

- actions have visible consequences
- alliances form and break naturally
- users can track why a scene is changing

### Phase 3: Make It Replayable

Goal: make runs worth revisiting and comparing.

Build:

- branching timelines
- save and load runs
- replay mode
- compare runs side by side
- transcript diff for model comparisons
- scenario versioning

Success looks like:

- users can rerun the same setup with different model combinations
- branches are inspectable
- EchoState becomes something worth sharing as a demo

### Phase 4: Make It Deep

Goal: expand from a cool demo into a rich simulation platform.

Build:

- optional RAG for lore or evidence
- multi-scene campaigns
- faction systems
- public opinion systems
- advanced evaluation
- richer authoring tools
- polished showcase and publishing features

Success looks like:

- scenarios can become worlds
- creators can build reusable simulation packs
- the product has depth beyond one-off demos

## Build Philosophy

The safest path is:

1. Build the simulation engine first.
2. Treat chat as a presentation layer, not the whole product.
3. Add structured actions before adding retrieval.
4. Add replay and comparison before adding too much complexity.
5. Keep RAG optional until the core loop already feels alive.

## MVP Principle

If a feature does not improve one of these, it probably is not MVP:

- character distinctness
- world pressure
- user control
- visible consequences
- replay value
- model comparison

## Next Step

Start with a minimal playable engine:

- one scenario
- multiple characters
- multiple providers
- turn-based actions
- interruption support
- simple scoring

Once that loop feels good, everything else has a solid foundation.
