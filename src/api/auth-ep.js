const url = "http://localhost:4000/api/v1/";

module.exports = Object.freeze({
  aplicationTag: "?application=api-jwt",
  basicUrl: "http://localhost:4000/",
  refreshToken: url + "authentication/refreshtoken?application=api-jwt",
  getMe: url + "authentication/me?application=api-jwt",
  avatar: url + "users/avatar/",
  login: url + "authentication/login",
  register: url + "authentication/register",
  passwordChange: url + "authentication/changePassword?application=api-jwt",
  me: url + "authentication/me?application=api-jwt",
  videos: url + "video/vs",
  thumbnails: "http://localhost:4000/info/thumbnails/",
  preview: "http://localhost:4000/info/preview/",
  video: "http://localhost:4000/videos/",
  videoInfo: url + "video/v/",
  myComments: url + "c/my/?application=api-jwt",
  myVideos: url + "video/my/?application=api-jwt",
  searchSuggest: url + "video/suggest/",
  defaultAvatarLink: "http://localhost:4000/defaultAvatar.png",
  viewedVideo: url + "video/viewed/",

  likeCom: url + "c/like/",
  dislikeCom: url + "c/dislike/",
  unlikeCom: url + "c/unlike/",
  deleteCom: url + "c/del/",
  allComVideo: url + "c/all/",
  addCom: url + "c/add/",

  likeVideo: url + "video/like/",
  unlikeVideo: url + "video/unlike/",
  dislikeVideo: url + "video/dislike/",

  allPlaylists: url + "lists/all/",
  createPlaylist: url + "lists/addPlaylist/?application=api-jwt",
  removePlaylist: url + "lists/removePlaylist/",
  addToPlaylist: url + "lists/addToPlaylist/?application=api-jwt",
  removeFromPlaylist: url + "lists/removeFromPlaylist/",
  addToHistory: url + "lists/addToHistory/",
  removeFromHistory: url + "lists/removeFromHistory/",

  addToWatch: url + "lists/addToWatch/",
  removeFromToWatch: url + "lists/removeFromToWatch/",

  recommendedVideos: url + "video/recommended/",

  getHistory: url + "lists/history/?application=api-jwt",
  getToWatch: url + "lists/toWatch/?application=api-jwt",
  getPlaylist: url + "lists/playlist/",

  getUserDetails: url + "users/details/user?application=api-jwt",
  changeNotif: url + "users/notification/",
  getSubs: url + "users/subscribes/",
});
