// console.log("EventEmitter imported");
import { EventEmitter } from "node:events";

// console.log("Login function created");
const login = (name) => {
  console.log(`${name} logged in`);
};

// console.log("Start function created");
const start = () => {
  console.log("System starts");
};

// console.log("Working function created");
const working = (name) => {
  console.log(`${name} add items to cart`);
};

// console.log("Checkout function created");
const checkout = (name) => {
  console.log(`${name} logged out`);
};

// console.log("EventEmitter object created");
const task = new EventEmitter();

// console.log("Greet listeners registered");
task.once("greet", start);
task.on("greet", login);
task.on("greet", working);
task.on("greet", checkout);

// console.log("Exit listener registered");
task.once("exit", () => {
  console.log("System shutting down");
});

// console.log("First greet event emitted");
task.emit("greet", "Abhinash Rai");

// console.log("Second greet event emitted");
task.emit("greet", "Mudit Lohani");

// console.log("Working listener removed");
task.off("greet", working);

// console.log("Third greet event emitted");
task.emit("greet", "Manya Goyal");

// console.log("Exit event emitted");
task.emit("exit", "Manager");