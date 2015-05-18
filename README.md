e2e-shutdown
=========

## Installation

clone the repo, then run `npm install` from within the folder.

## Tests

Use `npm test` to run unit and e2e tests.

As configured, the tests will not exit even though both the unit and e2e tasks successfully complete. By commenting out [line 14](https://github.com/castle-dev/e2e-shutdown/blob/develop/test/e2e/scenario.js#L14) in test/e2e/scenario.js, the tests will exit, so we know the firebase ref is at fault. However, after uncommenting lines [17](https://github.com/castle-dev/e2e-shutdown/blob/develop/test/e2e/scenario.js#L17) and [18](https://github.com/castle-dev/e2e-shutdown/blob/develop/test/e2e/scenario.js#L18) in test/e2e/scenario.js, the tests still don't complete as one would expect.
