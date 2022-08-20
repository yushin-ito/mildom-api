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
   * Get live informations about the given roomId.
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
   * Get streamer ranking about the given type.
   *
   * @param {string} type ["hour", "day", "week", "month"]
   * @returns {Promise<object>}
   */
  async getStreamerRanking(type = "day") {
    const types = ["hour", "day", "week", "month"];
    if (!types.includes(type))
      throw new Error(`"type" argument must be one of these: [${types}]`);
    const url = new URL(endpoints.getStreamerRanking(type));
    const ranking = await this.getRequest(url);
    return ranking ? ranking : {};
  }

  /**
   * getFollowerRanking()
   * Get follower ranking about the given type.
   *
   * @param {string} type ["hour", "day", "week", "month"]
   * @returns {Promise<object>}
   */
  async getFollowerRanking(type = "day") {
    const types = ["hour", "day", "week", "month"];
    if (!types.includes(type))
      throw new Error(`"type" argument must be one of these: [${types}]`);
    const url = new URL(endpoints.getFollowerRanking(type));
    const ranking = await this.getRequest(url);
    return ranking ? ranking : {};
  }

  /**
   * getUserProfile()
   * Get user profile about the given userId.
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
   * Get server informations about the given rooomId.
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
   * Get playback list about the given userId.
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
   * Get playback informations about the given videoId .
   *
   * @param {Number} videoId
   * @returns {Promise<object>}
   */
  async getPlaybackInfo(videoId) {
    const url = new URL(endpoints.getPlaybackInfo(videoId));
    const playbackInfo = await this.getRequest(url);
    return playbackInfo ? playbackInfo : {};
  }

  /**
   * getPlaybackChat()
   * Get playback chat about the given videoId .
   *
   * @param {Number} videoId
   * @param {Number} timeOffset
   * @returns {Promise<object>}
   */
  async getPlaybackChat(videoId, timeOffset) {
    const url = new URL(endpoints.getPlaybackChat(videoId, timeOffset));
    const chat = await this.getRequest(url);
    return chat ? chat : {};
  }

  /**
   * getEventTagList()
   * Get event tag list.
   *
   * @returns {Promise<object>}
   */
  async getEventTagList() {
    const url = new URL(endpoints.getEventTagList());
    const result = await this.getRequest(url);
    return result && result.body ? result.body.tag_list : {};
  }

  /**
   * getEventList()
   * Get event list.
   * @param {Number} userId
   * @param {string} tag
   * @param {string} state ["all", "scheduled", "holding", "finished"]
   * @param {Number} page
   * @param {Number} limit
   * @returns {Promise<object>}
   */
  async getEventList(userId, tag, state, page = 1, limit = 50) {
    const tags = await this.getEventTagList();
    const states = ["all", "scheduled", "holding", "finished"];
    const type = states.indexOf(state);
    tags.push("全て");
    if (!tags.includes(tag)) {
      throw new Error(`"tag" argument must be one of these: [${tags}]`);
    }
    if (tag === "全て") {
      tag = "";
    }
    if (!(type + 1)) {
      throw new Error(`"type" argument must be one of these: [${states}]`);
    }
    const url = new URL(endpoints.getEventList(userId, tag, type, page, limit));
    const event = await this.getRequest(url);
    return event ? event : {};
  }

  /**
   * isLive()
   * Get stream live status about the given userId.
   * members-only live stream is not supported.
   *
   * @param {Number} userId
   * @returns {Boolean}
   */
  async isLive(userId) {
    const profile = await this.getUserProfile(userId);
    return Boolean(profile.user_info.anchor_live == 11);
  }

  /**
   * search()
   * Search "query" about the given category.
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
