import { log } from "./log";

class Test {
  @log("testMessage")
  testLogMethod() {
    console.log("testLogMethod01");
  }
}

const test = new Test();
test.testLogMethod();
