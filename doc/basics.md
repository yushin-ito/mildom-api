# Basics

> \*For convenience, all code examples in this document are presented in ESModules. When using CommonJS, `import` may need to be replaced with `require()` calls.

- [Basics](#basics)
  - [Client basics](#client-basics)
    - [Create a client](#create-a-client)
  - [API Calls Basic](#api-calls-basic)
    - [mildom.getRequest(url) => Promise](#mildomgetrequesturl--promise)
    - [mildom.getLiveInfo(roomId) => Promise](#mildomgetliveinforoomid--promise)
    - [mildom.getStreamerRanking(type) => Promise](#mildomgetstreamerrankingtype--promise)
    - [mildom.getFollowerRanking(type) => Promise](#mildomgetfollowerrankingtype--promise)
    - [mildom.getUserProfile(userId) => Promise](#mildomgetuserprofileuserid--promise)
    - [mildom.getServerInfo(roomId) => Promise](#mildomgetserverinforoomid--promise)
    - [mildom.getPlaybackList(userId, [page], [lismit]) => Promise](#mildomgetplaybacklistuserid-page-lismit--promise)
    - [mildom.getPlaybackInfo(videoId) => Promise](#mildomgetplaybackinfovideoid--promise)
    - [mildom.getPlaybackChat(videoId, timeOffset) => Promise](#mildomgetplaybackchatvideoid-timeoffset--promise)
    - [mildom.getEventList(userId, tag, state, [page], [limit]) => Promise](#mildomgeteventlistuserid-tag-state-page-limit--promise)
    - [mildom.isLive(userId) => Boolean](#mildomisliveuserid--boolean)
    - [mildom.serch(query, [category], [page], [limit]) => Promise](#mildomserchquery-category-page-limit--promise)

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

### mildom.getRequest(url) => Promise

Send GET request.
Kind: instance method of `MildomAPI`
| Param | Type |
| :---: | :----: |
| url | URL |

### mildom.getLiveInfo(roomId) => Promise

Get live informations about the given roomId.
Kind: instance method of `MildomAPI`
| Param | Type |
| :---: | :----: |
| roomId | Number |

### mildom.getStreamerRanking(type) => Promise

Get streamer ranking about the given type.
Kind: instance method of `MildomAPI`
| Param | Type | Description |
| :---: | :----: | :--------------------: |
| type | string | hour, day, week, month |

### mildom.getFollowerRanking(type) => Promise

Get follower ranking about the given type.
Kind: instance method of `MildomAPI`
| Param | Type | Description |
| :---: | :----: | :--------------------: |
| type | string | hour, day, week, month |

### mildom.getUserProfile(userId) => Promise

Get an user profile about the given userId.
Kind: instance method of `MildomAPI`
| Param | Type |
| :---: | :----: |
| userId | Number |

### mildom.getServerInfo(roomId) => Promise

Get server infomations about the given roomId.
Kind: instance method of `MildomAPI`
| Param | Type |
| :---: | :----: |
| roomId | Number |

### mildom.getPlaybackList(userId, [page], [lismit]) => Promise

Get a playback list about the given userId.
Kind: instance method of `MildomAPI`
| Param | Type | Default |
| :---: | :----: | :--------:|
| userId | Number |  
| [page] | Number | 1 |
| [limit] | Number | 10 |

### mildom.getPlaybackInfo(videoId) => Promise

Get playback informations about the given videoId.
Kind: instance method of `MildomAPI`
| Param | Type |
| :---: | :----: |
| videoId | Number |

### mildom.getPlaybackChat(videoId, timeOffset) => Promise

Get playback chat about the given videoId.
Kind: instance method of `MildomAPI`
| Param | Type |
| :---: | :----: |
| videoId | Number |
| timeOffset | Number |

### mildom.getEventList(userId, tag, state, [page], [limit]) => Promise

Get event list.
Kind: instance method of `MildomAPI`
| Param | Type | Default | Description |
| :---: | :----: | :-----: |:--------------------: |
| userId | Number | |
| tag | string | |
| state | string | | ["all", "scheduled", "holding", "finished"] |
|[page] | Number | 1 |
|[limit]| Number | 50 |

### mildom.isLive(userId) => Boolean

Get stream live status about the given userId.
Kind: instance method of `MildomAPI`
| Param | Type |
| :---: | :----: |
| userId | Number |

### mildom.serch(query, [category], [page], [limit]) => Promise

Search "query" about the given category.
| Param | Type | Default | Description |
| :---: | :----: | :-----: |:--------------------: |
| query | string | | string you want to search |
| type | string | | ["user", "live", "video", "playback", "recommend", "clip", "all"] |
|[page] | Number | 1 |
|[limit]| Number | 10 |
