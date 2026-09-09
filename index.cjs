const fs = require("fs");
const path = require("path");

const presets = [".swiftlint.yml",".swiftformat"];
const defaultPreset = ".swiftlint.yml";
const content = fs.readFileSync(path.join(__dirname, defaultPreset), "utf8");

module.exports = {
  name: "@sebastienrousseau/swift-config",
  version: "0.0.1",
  presets,
  defaultPreset,
  content
};
