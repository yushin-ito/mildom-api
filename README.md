# mildom-api

[![npm version](https://flat.badgen.net/npm/v/mildom-api)](https://www.npmjs.com/package/mildom-api)
![workflow](https://github.com/yushin-ito/mildom-api/actions/workflows/node.js.yml/badge.svg)
![Coverage:lines](coverage/badge-lines.svg)
![Coverage:functions](coverage/badge-functions.svg)
![Coverage:branches](coverage/badge-branches.svg)
![Coverage:statements](coverage/badge-statements.svg)
![Licence](https://img.shields.io/badge/license-MIT-blue.svg?maxAge=43200)

Simple Wrapper Module for making API calls to https://fortniteapi.io.

You can also read the [module docs](https://github.com/yushin-ito/mildom/wiki) for a list of supported calls.

## Install the Module

```bash
npm install mildom-api
```

## Example API Calls

Get user profile by user id.

```js
import { Mildom } from "mildom-api";

const mildom = new Mildom();

const profile = mildom.getUserProfile(100000);
console.log(progile);
```

Get Live Streaming Chat.

```js
import { ChatListener } from "mildom-api";

const onChat = async (chat) => {
  console.log(chat.userName);
  console.log(chat.msg);
};

const listener = new ChatListener(13650940);
listener.on("onChat", onChat);
await listener.startListener();
```

## License

MIT
