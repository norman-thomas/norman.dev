---
title: Intro to PureScript
description: The first post is the most memorable one.
createdAt: 2020-04-16
updatedAt: 2020-04-16
---

# Beginning PureScript

## Motivation


## Installation


## Development Workflow



```purs
import Prelude
import Effect.Console (log)

greet :: String -> String
greet name = "Hello, " <> name <> "!"

main = log (greet "World")
```
