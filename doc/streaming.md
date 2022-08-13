# Streaming
> For convenience, all code examples in this document are presented in ESModules. When using CommonJS, `import` may need to be replaced with `require()` calls.
## Class: ChatListener
This class is for live stream to get the chat. It extends the EventEmitter.
```js 
import { ChatListener } from "mildom-api";

const listener = new ChatListener("roomId")
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

### startListener()
Start stream chat in the live stream room.

### stopListener()
Stop stream chat in the live stream room.

### 
