# Streaming

> For convenience, all code examples in this document are presented in ESModules. When using CommonJS, `import` may need to be replaced with `require()` calls.

- [Streaming](#streaming)
  - [Class: ChatListener](#class-chatlistener)
    - [Event: 'open'](#event-open)
    - [Event: 'close'](#event-close)
    - [Event: 'error'](#event-error)
    - [Event: 'onEnterRoom'](#event-onenterroom)
    - [Event: 'onAdd'](#event-onadd)
    - [Event: 'onChat'](#event-onchat)
    - [Event: 'onUserCount'](#event-onusercount)
    - [Event: 'onLiveStart'](#event-onlivestart)
    - [Event: 'onLiveEnd'](#event-onliveend)
    - [listener.startListener()](#listenerstartlistener)
    - [listener.stopListener()](#listenerstoplistener)
    - [listener.isListening()](#listenerislistening)
    - [listener.ping()](#listenerping)
    - [listener.generateWebSocket()](#listenergeneratewebsocket)

## Class: ChatListener

This class is for live stream to get the chat. It extends the EventEmitter.

```js
import { ChatListener } from "mildom-api";

const listener = new ChatListener("roomId");
```

### Event: 'open'

Emitted when the connection is established.

### Event: 'close'

Emitted when the connection is closed.

### Event: 'error'

Emitted when an error occurs.

- error {Error}

### Event: 'onEnterRoom'

Emitted when user enter the room for the first time.

### Event: 'onAdd'

Emitted when user enter the room after the first time.

### Event: 'onChat'

Emitted when a chat is received.

- message: {object}

```js
{
  area: 2000,
  cmd: 'onChat',
  fansBgPic: null,
  fansGroupType: 0,
  fansLevel: null,
  fansName: null,
  gareaReturnObj: { badges: null, fans_group_type: 10, user_pendant: null },
  isFirstTopup: 0,
  level: 100,
  medals: null,
  msg: 'hello world',
  msgId: '1000000000000_1000000_1000',
  reqId: 0,
  roomAdmin: 1,
  roomId: 1000000,
  time: '1000000000000',
  toId: 1000000,
  toName: 'hoge',
  type: 3,
  userId: 10000001,
  userImg: 'https://isscdn.mildom.tv/download/file/jp/mildom/nnphotos/10000001/foo.png',
  userName: 'fuga'
}
```

### Event: 'onUserCount'

Emitted when a received user count

- message: {object}

```js
{ cmd: 'onUserCount', roomId: 100000, type: 3, userCount: 10 }
```

### Event: 'onLiveStart'

Emitted when a live stream started.

### Event: 'onLiveEnd'

Emitted when a live stream ended.

### listener.startListener()

Start stream to the mildom channel of the given roomId.

### listener.stopListener()

Stop stream to the mildom channel of the given roomId.

### listener.isListening()

Check if the listener is actively connected to the channel.

### listener.ping()

Ping the channel recursively to maintain listeners.

### listener.generateWebSocket()

Generate a websocket and assign event handlers.
