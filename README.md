JavaScript Map
---

## Objectives

1. Implement a `map()` function from scratch
2. Explain how `map()` differs from `reduce()`
3. Explain how `map()` builds on `reduce()`

## Introduction

- Tip students off to the fact that `map()` is really just an opinionated `reduce()`
- Again, start with a real-world example

## Implementation

- We should be aiming for students to write something like this at first:

``` javascript
function map(collection, fn) {
  let m = []

  for (const item in collection) {
    m = [...m, fn(collection[item], item, collection)]
  }

  return m
}
```

- But we should also point out to students that we can also see `map()` as an abstraction built on top of `reduce()`:

``` javascript
function map(collection, fn) {
  const mapper = (memo, item, index, all) => [...memo, fn(item, index, all)]

  return reduce(collection, mapper, [])
}
```

## Resources

- [MDN: Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
