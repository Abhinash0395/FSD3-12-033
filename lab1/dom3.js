import {EventEmitter} from "events";

// console.log("Button event emitter created");
const button = new EventEmitter();

// console.log("Click listener registered");
button.on("click",(uname) => {
    console.log(`button clicked by ${uname}`);
});

// console.log("Raju click emitted");
button.emit("click", "Raju");

// console.log("Kaju click emitted");
button.emit("click", "Kaju");

// console.log("Anjali click emitted");
button.emit("click", "Anjali");

// console.log("Aaniya click emitted");
button.emit("click", "Aaniya");

// console.log("Rani click emitted");
button.emit("click", "Rani");

// console.log("Final click emitted");
button.emit("click");