import endpoints from "../lib/constants/endpoints.js";

describe("all endpoints methods return url containing required param", () => {
  it("streamer rank request url contains required param", () => {
    const url = endpoints.getStreamerRanking("hour");
    expect(url).toContain("?type=hour");
  });

  it("follower rank request url contains required param", () => {
    const url = endpoints.getFollowerRanking("hour");
    expect(url).toContain("?type=hour");
  });

  it("user profile request url contains required param", () => {
    const url = endpoints.getUserProfile(100000);
    expect(url).toContain("&user_id=100000");
  });

  it("live info request url contains required param", () => {
    const url = endpoints.getLiveInfo(100000);
    expect(url).toContain("&user_id=100000");
  });

  it("playback list request url contains required params", () => {
    const url = endpoints.getPlaybackList(100000, 1, 10);
    expect(url).toContain("&user_id=100000");
    expect(url).toContain("&page=1");
    expect(url).toContain("&limit=10");
  });

  it("playback info request url contains required param", () => {
    const url = endpoints.getPlaybackInfo("aaa");
    expect(url).toContain("&v_id=aaa");
  });

  it("playback chat request url contains required params", () => {
    const url = endpoints.getPlaybackChat("aaa", 3000000);
    expect(url).toContain("?video_id=aaa");
    expect(url).toContain("&time_offset_ms=3000000");
  });

  it("server info request url contains required param", () => {
    const url = endpoints.getServerInfo(100000);
    expect(url).toContain("?room_id=100000");
  });

  it("search request url contains required params", () => {
    const url = endpoints.search("mildom", 7, 1, 10);
    expect(url).toContain("?query=mildom");
    expect(url).toContain("&type=7");
    expect(url).toContain("&page=1");
    expect(url).toContain("&limit=10");
  });
});
