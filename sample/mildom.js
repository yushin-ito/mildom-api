import { Mildom } from "mildom-api";

const mildom = new Mildom();

const rank = await mildom.getStreamerRanking("hour");
console.log(Object.keys(rank));

const ranking = await mildom.getFollowerRanking("hour");
console.log(Object.keys(ranking));

const profile = await mildom.getUserProfile(100000);
console.log(Object.keys(profile));

const liveInfo = await mildom.getLiveInfo(100000);
console.log(Object.keys(liveInfo));

const playbackList = await mildom.getPlaybackList(10687920);
console.log(Object.keys(playbackList));

const playbackInfo = await mildom.getPlaybackInfo(
  "10687920-bvk49ochl3vrgho93neg"
);
console.log(Object.keys(playbackInfo));

const serverInfo = await mildom.getServerInfo(100000);
console.log(Object.keys(serverInfo));

const result = await mildom.search("mildom");
console.log(Object.keys(result));
