import { EventEmitter } from "events";

// console.log("Form event emitter created");
const form = new EventEmitter();

// console.log("Submit listener registered");
form.on("submit", (uname,password) => {
  console.log("form submitted");
  console.log(`user name: ${uname}`);
  console.log(`user password: ${password}`);
  // console.log("Form submission handled");
});

// console.log("Submit event emitted");
form.emit("submit", "abc@abc.com ❤️", "1122334422")