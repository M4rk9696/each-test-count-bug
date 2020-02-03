# About

A repo to reproduce a bug in jest-each.

Tests inside `each` are not counted in the total count. And if a test file contains only `each`, it results in `Your test suite must contain at least one test.`

## Steps to reproduce

- `yarn install`
- `yarn test`

