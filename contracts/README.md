# Lumerin Smart Contracts

Core contracts for the Lumerin marketplace (rental + resellable flows), faucet,
validator registry. Tooling is provided to compile, deploy, export ABIs, and
generate JavaScript/TypeScript and Go bindings.

## Prerequisites

- Node.js 20.x and Yarn classic (corepack is fine)
- Foundry (for `forge fmt` used by `yarn format:sol`)
- Optional: Go + `abigen` (Go bindings), `slither`/`aderyn` for static analysis

## Setup

1. `cd contracts`
2. `yarn install`
3. Configure environment variables for deployments (see Deployment). There is no
   `.env.example`; Hardhat loads variables via `dotenv/config`.

## Day-to-day commands

- Compile + export ABI: `make compile` (writes to `abi/` via hardhat-abi-exporter)
- Format Solidity: `yarn format:sol`
- Local hardhat node: `make node-local`
- Quick local fixture deploy (prints addresses): `make deploy-local`
- Local integration tests (starts a node, builds JS bindings): `make test`
- Hardhat-only tests: `make test-hardhat`
- Coverage: `make test-hardhat-coverage`
- Upgrade tests: `make test-upgrade`
- Static analysis: `make static-analysis` (slither) or `make static-analysis-aderyn`
- Enable gas reporter: set `REPORT_GAS=true` then run tests

## Deployment (manual)

Use `hardhat-prod.config.ts` to target a remote RPC:

Example: `yarn hardhat run --network default ./scripts/deploy-lumerin.ts`

Required env per script (all use `--network default` with the config above):

Deployment scripts write the resulting addresses to `*-addr.tmp`.

## Client bindings

- TypeScript/Viem: `make build-js` (runs `wagmi generate`, outputs to `build-js/`)
- Go: `make build-go` (requires `abigen`, outputs to `build-go/`; module path
  uses the major version derived from `VERSION`)

## Versioning & releases

- Update the `VERSION` file before releasing bindings.
- `make release-js` / `make release-go` push artifacts to the respective GitHub
  repos (`contracts-js`, `contracts-go`).
