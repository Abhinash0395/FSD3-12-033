// console.log("EventEmitter imported");
import { EventEmitter } from "events";

class DomClass extends EventEmitter {
  addEventListener(eventName, callback) {
    this.on(eventName, callback);
  }
  removeEventListener(eventName, callback) {
    this.off(eventName, callback);
  }

  // console.log("Dispatching event:", eventName);
  dispatchEvent(eventName, eventData = {}) {
    const event = {
      type: eventName,
      timespam: new Date(),
      ...eventData,
    };
    this.emit(eventName, event);
  }
}

// console.log("Creating button");
const button = new DomClass();

// console.log("Click handler created");
const handleClick = (event) => {
  console.log(`Button clicked type: ${event.type} at ${event.timespam}`);
};

// console.log("Click listener added");
button.addEventListener("click", handleClick);

// console.log("Click event dispatched");
button.dispatchEvent("click", {
  target: "submitBtn",
});
