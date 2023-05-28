# melter-plugin-liquidx

This plugin makes it super easy to get started with [LiquidX](https://github.com/unshopable/liquidx) in your next Shopify theme project with [melter](https://github.com/unshopable/melter).

## Table of Contents

- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## Getting started

### Prerequisites

- [melter](https://github.com/unshopable/melter)

### Installation

First, run:

```sh
npm install --save-dev @unshopable/melter-plugin-liquidx
```

Then update (or create) your melter config:

```js
const { LiquidXPlugin } = require('@unshopable/melter-plugin-liquidx');

/** @type {import("@unshopable/melter").MelterConfig} */
const melterConfig = {
  plugins: [new LiquidXPlugin()],
};

module.exports = melterConfig;
```

And that's it. Head over to the [LiquidX documentation](https://github.com/unshopable/liquidx) for more information on its features.

## Contributing

TODO

## License

[MIT](LICENSE)
