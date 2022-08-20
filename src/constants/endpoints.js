const endpoint = "https://cloudac.mildom.com/nonolive";

export default {
  getStreamerRanking: (type) =>
    `${endpoint}/gappserv/rank/locationGiftRankV2?type=${type}&rank_type=receive`,
  getFollowerRanking: (type) =>
    `${endpoint}/gappserv/rank/locationGiftRankV2?type=${type}&rank_type=send`,
  getUserProfile: (userId) =>
    `${endpoint}/gappserv/user/profileV2?__platform=web&user_id=${userId}`,
  getLiveInfo: (userId) =>
    `${endpoint}/gappserv/live/enterstudio?__platform=web&user_id=${userId}`,
  getPlaybackList: (userId, page, limit) =>
    `${endpoint}/videocontent/profile/playbackList?__platform=web&user_id=${userId}&page=${page}&limit=${limit}`,
  getPlaybackInfo: (videoId) =>
    `${endpoint}/videocontent/playback/getPlaybackDetail?__platform=web&v_id=${videoId}`,
  getPlaybackChat: (videoId, timeOffset) =>
    `${endpoint}/videocontent/chat/replay?video_id=${videoId}&time_offset_ms=${timeOffset}&drag_flag=1`,
  getEventTagList: () =>
    `https://cloudac-cf-jp.mildom.com/nonolive/gappserv/top_banner/tag_list`,
  getEventList: (userId, tag, type, page, limit) =>
    `https://cloudac-cf-jp.mildom.com/nonolive/gappserv/top_banner/list?__platform=web&__user_id=${userId}&page=${page}&limit=${limit}&tag=${tag}&hold_state=${type}`,
  getServerInfo: (roomId) => `https://im.mildom.com/?room_id=${roomId}`,
  search: (query, type, page, limit) =>
    `https://cloudac-cf-jp.mildom.com/nonolive/gsearch/search?query=${query}&type=${type}&page=${page}&limit=${limit}`,
};
