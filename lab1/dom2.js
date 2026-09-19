import { EventEmitter } from "events";

// console.log("Button event emitter created");
const button = new EventEmitter();

// console.log("Task 1 listener registered");
button.on("click", () => {
  console.log("Task 1");
});

// console.log("Task 2 listener registered");
button.on("click", () => {
  console.log("Task 2");
});

// console.log("Task 3 listener registered");
button.on("click", () => {
  console.log("Task 3");
});

// console.log("Click event emitted");
button.emit("click");