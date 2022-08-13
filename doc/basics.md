# Basics

> \*For convenience, all code examples in this document are presented in ESModules. When using CommonJS, `import` may need to be replaced with `require()` calls.,

## Client basics

### Create a client

Import the default export `MildomAPI` variable from `mildom-api` module.

```js
import { MildomAPI } from "mildom-api";
```

Then Instanciate

```js
const mildom = new MildomAPI();
```

Your client is now ready.

## API Calls Basic

Call the API using the created client.

### mildom.getStreamerRanking(type) => Promise<object>

Get streamer ranking

Kind: instance method of `MildomAPI`
| Param | Type | Description |
| :---: | :----: | :--------------------: |
| type | string | hour, day, week, month |

### Get an user profile by user ID
