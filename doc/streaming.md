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

- chat: {object}

```js

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
