# `@sebastienrousseau/swift-config` API Specification

Comprehensive schema, property definitions, and exported options reference for `@sebastienrousseau/swift-config`.

---

## Description

Shareable Swift configuration standards providing strict SwiftLint rules and deterministic SwiftFormat presets.

---

## Programmatic Entrypoints

| Specifier | Module Type | Target Runtime | Path |
| :--- | :--- | :--- | :--- |
| `.` (default) | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `@sebastienrousseau/swift-config` | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `index.d.ts` | TypeScript | TypeScript >= 5.0 | Type declarations |

---

## Feature & Property Reference

### 1. .swiftlint.yml

- **Description**: Hardened SwiftLint configuration with opt-in safety rules prohibiting force unwrapping and implicit optionals.
- **Scope**: Production & Development
- **Status**: Stable & Active

### 2. .swiftformat

- **Description**: Deterministic SwiftFormat ruleset standardizing indentation, spacing, and header comments.
- **Scope**: Production & Development
- **Status**: Stable & Active
