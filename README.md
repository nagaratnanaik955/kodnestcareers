# KodNestCareers Monorepo (Scaffold)

This repository is a local-first, modular monolith with workers for background processing. This README only describes the initial scaffold and local setup skeleton.

## Structure (high level)

- apps/web
- apps/worker
- packages/db
- packages/modules
- packages/ai-gateway
- packages/events
- packages/shared
- packages/config
- infra/docker
- infra/scripts
- docs
- assets
- scripts

## Local setup (skeleton)

1. Install pnpm and Docker.
2. Install dependencies:
   - pnpm install
3. Start local infrastructure:
   - pnpm dev:local
4. Run dev processes (once apps are implemented):
   - pnpm dev

Business logic and actual app implementation will be added later.

