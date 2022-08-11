import https from "https";
import endpoints from "./constants/endpoints.js";

class Mildom {
  constructor() {}

  /**
   * getRequest()
   * Get base request.
   *
   * @param {string} url
   * @returns {Promise<object>}
   */
  async getRequest(url) {
    const promise = new Promise((resolve, reject) => {
      const req = https.get(url, (res) => {
        let chunks = [];
        res.on("data", (data) => {
          chunks.push(data);
        });

        res.on("end", () => {
          const data = Buffer.concat(chunks);
          resolve(data);
        });
      });

      req.on("error", (error) => {
        reject(error.toString());
      });

      req.end();
    })
      .then((data) => {
        return JSON.parse(data.toString() || "{}");
      })
      .catch((error) => {
        throw Error(error);
      });

    return promise;
  }

  /**
   * getLiveInfo()
   * Get live information.
   *
   * @param {Number} roomId
   * @returns {Promise<LiveInfo>}
   */
  async getLiveInfo(roomId) {
    const url = new URL(endpoints.getLiveInfo(roomId));
    const liveInfo = await this.getRequest(url);
    return liveInfo && liveInfo.body ? liveInfo.body : undefined;
  }

  /**
   * getStreamerRanking()
   * Get streamer rank.
   *
   * @param {string} type (hour, day, week, month)
   * @returns
   */
  async getStreamerRanking(type) {
    const url = new URL(endpoints.getStreamerRanking(type));
    const ranking = await this.getRequest(url);
    return ranking && ranking.body ? ranking.body : undefined;
  }

  /**
   * getFollowerRanking()
   * Get follower rank.
   *
   * @param {string} type [hour, day, week, month]
   * @returns
   */
  async getFollowerRanking(type) {
    const url = new URL(endpoints.getFollowerRanking(type));
    const ranking = await this.getRequest(url);
    return ranking && ranking.body ? ranking.body : undefined;
  }

  /**
   * getUserProfile()
   * Get user profile.
   *
   * @param {string} userId [hour, day, week, month]
   * @returns
   */
  async getUserProfile(userId) {
    const url = new URL(endpoints.getUserProfile(userId));
    const profile = await this.getRequest(url);
    return profile && profile.body ? profile.body : undefined;
  }

  /**
   * getServerInfo()
   * Get server information.
   *
   * @param {Number} roomId
   * @returns
   */
  async getServerInfo(roomId) {
    const url = new URL(endpoints.getServerInfo(roomId));
    const server = await this.getRequest(url);
    return server ? server : undefined;
  }

  /**
   * getPlaybackList()
   * Get playback list.
   *
   * @param {Number} userId
   * @param {Number} page
   * @param {Number} limit
   * @returns
   */
  async getPlaybackList(userId, page, limit) {
    const url = new URL(endpoints.getPlaybackList(userId, page, limit));
    const playback = await this.getRequest(url);
    return playback && playback.body ? playback.body : undefined;
  }

  /**
   * getPlaybackInfo()
   * Get server information.
   *
   * @param {Number} userId
   * @returns
   */
  async getPlaybackInfo(videoId) {
    const url = new URL(endpoints.getPlaybackInfo(videoId));
    const playback = await this.getRequest(url);
    return playback && playback.body ? playback.body : undefined;
  }

  /**
   * isLive()
   * Get stream live status.
   * members-only live stream is not supported.
   *
   * @param {Number} userId
   * @returns {Boolean}
   */
  async isLive(userId) {
    const profile = await this.getUserProfile(userId);
    return profile ? Boolean(profile.user_info.anchor_live == 11) : undefined;
  }

  /**
   * search()
   * Search category.
   *
   * @param {string} query
   * @param {string} category ["user", "live", "video", "playback", "recommend", "clip", "all"]
   * @param {Number} page
   * @param {Number} limit
   * @returns
   */
  async serch(query, category = "all", page = 1, limit = 10) {
    const categoryArray = [
      "user",
      "live",
      "video",
      "playback",
      "recommend",
      "clip",
      "all",
    ];
    const type = categoryArray.indexOf(category) + 1;
    if (!type)
      throw new RangeError(
        `"category" arguments must be one of these: [${categoryArray}]`
      );
    const url = new URL(endpoints.search(query, type, page, limit));
    const result = await this.getRequest(url);
    return result && result.body ? result.body : undefined;
  }
}

export default Mildom;
