import ChatListener from "../lib/stream/listener.js";

const listener = new ChatListener(14222782);

describe("event listener add and remove correctly.", () => {
  const onChat = (chat) => {
    console.log(chat.msg)
  }
  it(" a callback function added as event listener.", () => {
    listener.on("onChat", onChat);
    expect(listener.listeners("onChat")).toEqual(expect.anything());
  });
  it("an event listener removed from an event", () => {
    listener.removeListener("onChat", onChat);
    expect(listener.listeners("onChat")).toEqual(expect.anything());
  });
});

describe("websocket open and close correctly.", () => {
  it("open websocket and return expected ready state", async () => {
    await listener.startListener();
    await new Promise((resolve) => setTimeout(resolve, 2500));
    expect(listener.isListening()).toBeTruthy();
  });
  it("close websocket and return expected ready state", () => {
    listener.stopListener();
    expect(listener.isListening()).not.toBeTruthy();
  });
});
