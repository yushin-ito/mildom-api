import { ChatListener } from "mildom-api";

const onChat = async (chat) => {
  console.log(chat.msg);
};

const listener = new ChatListener(13650940);
listener.on("onChat", onChat);
await listener.startListener();
