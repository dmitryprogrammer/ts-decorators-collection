import { log } from "./log";

class Test {
  @log("testMessage")
  testLogMethod() {
    console.log("testLogMethod01");
  }

  @log("testAfterMessage", { position: "after" })
  testLogAfterMethod() {
    console.log("testLogMethod02");
    
  }
}

const test = new Test();
test.testLogMethod();
console.log("-------------------------");
test.testLogAfterMethod();
