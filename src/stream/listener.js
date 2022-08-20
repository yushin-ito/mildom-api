import { v4 } from "uuid";
import EventEmitter from "events";
import WebSocket from "ws";
import MildomAPI from "../mildom-api.js";
import encrypt from "../utils/encrypt.js";
import decrypt from "../utils/decrypt.js";

class ChatListener extends EventEmitter {
  constructor(roomId) {
    super();
    this.roomId = roomId;
    this.guestId = `pc-gp-${v4()}`;
  }

  async startListener() {
    const mildom = new MildomAPI();
    const serverInfo = await mildom.getServerInfo(this.roomId);
    if (serverInfo["wss_server"]) {
      const url = `wss://${serverInfo["wss_server"]}?roomId=${this.roomId}`;
      this.ws = this.generateWebSocket(url, this.roomId, this.guestId);
      this.ping();
    }
  }

  stopListener() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    if (this.ws) {
      this.ws.close();
    }
  }

  isListening() {
    return this.ws ? this.ws.readyState === 1 : false;
  }

  ping() {
    try {
      if (this.ws.readyState === 1) {
        this.ws.ping();
      } else if (this.ws.readyState > 1) {
        this.ws = this.ws.reopen();
        throw new Error(
          `Websocket closed unexpectedly for RoomId ${this.roomId}`
        );
      }
      this.timer = setTimeout(() => {
        this.ping();
      }, 2500);
    } catch (error) {
      if (this.ws) {
        this.ws.close();
      }
      throw new Error(
        `Websocket ping error to RoomId ${this.roomId}: ${error}`
      );
    }
  }

  generateWebSocket(url, roomId, guestId) {
    const ws = new WebSocket(url);
    ws.binaryType = "arraybuffer";
    ws.on("open", async () => {
      let data = encrypt({
        level: 1,
        userName: "user",
        guestId: guestId,
        roomId: roomId,
        reqId: 1,
        nonopara: "nonopara",
        cmd: "enterRoom",
      });
      ws.send(data);
      this.emit("open");
    });

    ws.on("error", async (error) => {
      this.emit("error", error);
    });

    ws.on("message", async (data) => {
      if (data) {
        const message = decrypt(data);
        switch (message.cmd) {
          case "enterRoom":
            this.emit("onEnterRoom");
            break;
          case "onChat":
            this.emit("onChat", message);
            break;
          case "onAdd":
            this.emit("onAdd");
            break;
          case "onUserCount":
            this.emit("onUserCount", message);
            break;
          case "onLiveStart":
            this.emit("onLiveStart");
            break;
          case "onLiveEnd":
            this.emit("onLiveEnd");
            break;
        }
      }
    });

    ws.on("close", async () => {
      this.emit("close");
    });

    return ws;
  }
}
export default ChatListener;
