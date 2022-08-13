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

### mildom.getRequest(url) => Promise
Send GET request.
Kind: instance method of `MildomAPI`
| Param |  Type  |
| :---: | :----: |
|  url  |   URL  |

### mildom.getLiveInfo(roomId) => Promise
Get live informations.
Kind: instance method of `MildomAPI`
| Param  |  Type  |
| :---:  | :----: |
| roomId | Number |

### mildom.getStreamerRanking(type) => Promise
Get streamer ranking.
Kind: instance method of `MildomAPI`
| Param |  Type  |      Description       |
| :---: | :----: | :--------------------: |
| type  | string | hour, day, week, month |

### mildom.getFollowerRanking(type) => Promise
Get follower ranking.
Kind: instance method of `MildomAPI`
| Param |  Type  |      Description       |
| :---: | :----: | :--------------------: |
| type  | string | hour, day, week, month |

### mildom.getUserProfile(userId) => Promise
Get an user profile.
Kind: instance method of `MildomAPI`
| Param  |  Type  |
| :---:  | :----: |
| userId | Number |

### mildom.getServerInfo(roomId) => Promise
Get server infomations.
Kind: instance method of `MildomAPI`
| Param  |  Type  |
| :---:  | :----: |
| roomId | Number |

### mildom.getPlaybackList(userId, [page], [lismit]) => Promise
Get a playback list.
Kind: instance method of `MildomAPI`
|  Param  |  Type  |  Default  |
|  :---:  | :----: | :--------:|
| userId  | Number |     
| [page]  | Number |     1     |
| [limit] | Number |     10    |

### mildom.getPlaybackInfo(videoId) => Promise
Get playback informations
Kind: instance method of `MildomAPI`
|  Param  |  Type  |
|  :---:  | :----: |
| videoId | Number |

### mildom.isLive(userId) => Boolean
Get stream live status.
Kind: instance method of `MildomAPI`
|  Param  |  Type  |
|  :---:  | :----: |
|  userId | Number |

### mildom.serch(query, [category], [page], [limit]) => Promise
Search category.
| Param |  Type  | Default |     Description       |
| :---: | :----: | :-----: |:--------------------: |
| query | string |         | string you want to search |
| type  | string |         | ["user", "live", "video", "playback", "recommend", "clip", "all"] |
|[page] | Number |    1    |
|[limit]| Number |    10   |
