import https from "https";
import endpoints from "./constants/endpoints.js";

class MildomAPI {
  constructor() {}

  /**
   * getRequest()
   * Send GET request.
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
          // eslint-disable-next-line no-undef
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
        return JSON.parse(data.toString());
      })
      .catch((error) => {
        throw Error(error);
      });

    return promise;
  }

  /**
   * getLiveInfo()
   * Get live informations.
   *
   * @param {Number} roomId
   * @returns {Promise<object>}
   */
  async getLiveInfo(roomId) {
    const url = new URL(endpoints.getLiveInfo(roomId));
    const liveInfo = await this.getRequest(url);
    return liveInfo ? liveInfo : {};
  }

  /**
   * getStreamerRanking()
   * Get streamer ranking.
   *
   * @param {string} type ["hour", "day", "week", "month"]
   * @returns {Promise<object>}
   */
  async getStreamerRanking(type) {
    const types = ["hour", "day", "week", "month"];
    if (!types.includes(type))
      throw new Error(`"type" argument must be one of these: [${types}]`);
    const url = new URL(endpoints.getStreamerRanking(type));
    const ranking = await this.getRequest(url);
    return ranking ? ranking : {};
  }

  /**
   * getFollowerRanking()
   * Get follower ranking.
   *
   * @param {string} type ["hour", "day", "week", "month"]
   * @returns {Promise<object>}
   */
  async getFollowerRanking(type) {
    const types = ["hour", "day", "week", "month"];
    if (!types.includes(type))
      throw new Error(`"type" argument must be one of these: [${types}]`);
    const url = new URL(endpoints.getFollowerRanking(type));
    const ranking = await this.getRequest(url);
    return ranking ? ranking : {};
  }

  /**
   * getUserProfile()
   * Get user profile.
   *
   * @param {string} userId
   * @returns {Promise<object>}
   */
  async getUserProfile(userId) {
    const url = new URL(endpoints.getUserProfile(userId));
    const profile = await this.getRequest(url);
    return profile ? profile : {};
  }

  /**
   * getServerInfo()
   * Get server informations.
   *
   * @param {Number} roomId
   * @returns {Promise<object>}
   */
  async getServerInfo(roomId) {
    const url = new URL(endpoints.getServerInfo(roomId));
    const serverInfo = await this.getRequest(url);
    return serverInfo ? serverInfo : {};
  }

  /**
   * getPlaybackList()
   * Get playback list.
   *
   * @param {Number} userId
   * @param {Number} page
   * @param {Number} limit
   * @returns {Promise<object>}
   */
  async getPlaybackList(userId, page = 1, limit = 10) {
    const url = new URL(endpoints.getPlaybackList(userId, page, limit));
    const playbackList = await this.getRequest(url);
    return playbackList ? playbackList : {};
  }

  /**
   * getPlaybackInfo()
   * Get playback information.
   *
   * @param {Number} userId
   * @returns {Promise<object>}
   */
  async getPlaybackInfo(videoId) {
    const url = new URL(endpoints.getPlaybackInfo(videoId));
    const playbackInfo = await this.getRequest(url);
    return playbackInfo ? playbackInfo : {};
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
    return profile ? Boolean(profile.user_info.anchor_live == 11) : {};
  }

  /**
   * search()
   * Search category.
   *
   * @param {string} query
   * @param {string} category ["user", "live", "video", "playback", "recommend", "clip", "all"]
   * @param {Number} page
   * @param {Number} limit
   * @returns {Promise<object>}
   */
  async search(query, category = "all", page = 1, limit = 10) {
    const categories = [
      "user",
      "live",
      "video",
      "playback",
      "recommend",
      "clip",
      "all",
    ];
    const type = categories.indexOf(category) + 1;
    if (!type)
      throw new Error(
        `"category" argument must be one of these: [${categories}]`
      );
    const url = new URL(endpoints.search(query, type, page, limit));
    const result = await this.getRequest(url);
    return result ? result : {};
  }
}

export default MildomAPI;
