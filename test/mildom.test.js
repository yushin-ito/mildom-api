import MildomAPI from "../src/mildom-api.js";

const mildom = new MildomAPI();

describe("all mildom api request return expected status code", () => {
  it("streamer ranking request equal to expected status code", async () => {
    const ranking = await mildom.getStreamerRanking("hour");
    expect(ranking.code).toEqual(0);
  });
  it("follower ranking request equal to expected status code", async () => {
    const ranking = await mildom.getFollowerRanking("hour");
    expect(ranking.code).toEqual(0);
  });

  it("user profile request equal to expected status code", async () => {
    const profile = await mildom.getUserProfile(100000);
    expect(profile.code).toEqual(0);
  });

  it("live info request equal to expected status code", async () => {
    const liveInfo = await mildom.getLiveInfo(100000);
    expect(liveInfo.code).toEqual(0);
  });

  it("playback list request equal to expected status code", async () => {
    const playbackList = await mildom.getPlaybackList(10687920);
    expect(playbackList.code).toEqual(0);
  });

  it("playback info request equal to expected status code", async () => {
    const playbackInfo = await mildom.getPlaybackInfo(
      "10687920-bvk49ochl3vrgho93neg"
    );
    expect(playbackInfo.code).toEqual(0);
  });

  it("playback chat request equal to expected status code", async () => {
    const playbackChat = await mildom.getPlaybackChat(
      "10687920-bvk49ochl3vrgho93neg",
      3000000
    );
    expect(playbackChat.code).toEqual(0);
  });

  it("event list request equal to expected status code", async () => {
    const eventList = await mildom.getEventList(100000, "全て", "holding");
    expect(eventList.code).toEqual(0);
  });

  it("server info request equal to expected status code", async () => {
    const serverInfo = await mildom.getServerInfo(100000);
    expect(serverInfo).toEqual(expect.anything());
  });

  it("search request equal to expected status code", async () => {
    const result = await mildom.search("mildom");
    expect(result.code).toEqual(0);
  });
});

describe("method throws with invalid argument", () => {
  it("get streamer ranking throws with invalid type", async () => {
    await expect(mildom.getStreamerRanking("hoge")).rejects.toThrow();
  });

  it("get follower ranking throws with invalid type", async () => {
    await expect(mildom.getFollowerRanking("fuga")).rejects.toThrow();
  });

  it("get event list throws with invalid arguments", async () => {
    await expect(
      mildom.getEventList(100000, "foo", "holding")
    ).rejects.toThrow();
    await expect(mildom.getEventList(100000, "全て", "bar")).rejects.toThrow();
  });

  it("serch throws with invalid type", async () => {
    await expect(mildom.search("mildom", "piyo")).rejects.toThrow();
  });
});
