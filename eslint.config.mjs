import config from "@10xly/eslint-config"

export default [
  ...config,
  {
    ignores: [
      "stuffbank/",
      "ignore/",
      "cli/",
      "t.js",
      "testing.js",
      "tstig.js",
      "old.js",
      "preinstall.js"
    ]
  }
]