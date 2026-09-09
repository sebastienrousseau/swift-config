---
title: "Usage — @sebastienrousseau/swift-config"
description: "How to use and configure @sebastienrousseau/swift-config."
layout: "doc"
---

# Usage

`@sebastienrousseau/swift-config` can be consumed across all standard module formats.

## CommonJS

```javascript
const config = require("@sebastienrousseau/swift-config");
console.log(config.presets);
```

## ES Modules

```javascript
import config from "@sebastienrousseau/swift-config";
console.log(config.defaultPreset);
```
