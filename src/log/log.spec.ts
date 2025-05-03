import { log } from ".";

class TestLog {
  @log("testMessage")
  testLogMethod() {
    console.log("testLogMethod01");
  }

  @log("testAfterMessage", { position: "after" })
  testLogAfterMethod() {
    console.log("testLogMethod02");
  }
}

it("Log decorator specs", () => {
    const test = new TestLog();
    test.testLogMethod();
    console.log("-------------------------");
    expect(test.testLogAfterMethod()).toBeUndefined();
});
