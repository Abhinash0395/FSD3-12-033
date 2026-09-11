# EventLoop

JS is synchronous and
 single threaded bydefault


## There can be async
behaviour
- with BrowseAPI - 
setTimeout, setInterval, setImmediate, nextTick
- with promises
- with event handlers

# promise 
- a function not executed immediately but it must be executed after a while it has some status during the execution at final it may [resolve() -> success]  [reject -> unsuccess]

# call back function =>
- that pass as argument or the parameter to another function

## Modern JS is of two types
1. CommonJS (.cjs) -> supports OOPS -> require
   -  priority (nextTick, Promise, setImmediate/setTimeout)
2. ModuleJS (.mjs) -> follow modular approach -> import
   - priority (Promise, nextTick, setImmediate/setTimeout)
