// DOM -> Document Object Model

import {EventEmitter} from "events";

const button = new EventEmitter();

// console.log("Button event emitter created");

button.on("click", () => {
   // console.log("Click event received");
   console.log("Button clicked");
});

button.emit("click");