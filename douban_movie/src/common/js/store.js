/**
 * Created by a1 on 17/8/16.
 */

/**
 * 如：window.localStorage._doubanMovie_:
 * {"buptsky":
 *    {"__wanted__":[
 *      {"id":"26363254","title":"战狼2","director":"吴京","casts":"吴京/弗兰克·格里罗/吴刚","collectCount":331291,"rating":7.5,"image":"http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2485983612.jpg","date":"年待定","pubdates":["2017-07-27(中国大陆)"],"subtype":" "},
 *      {"id":"26826398","title":"杀破狼·贪狼","director":"叶伟信","casts":"古天乐/吴樾/托尼·贾","collectCount":584,"rating":0,"image":"http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2494948513.jpg","date":"年待定","pubdates":["2017-08-17(中国大陆)","2017-08-25(香港)"],"subtype":" "}]
 *    },{...}
 *  }
 */
export function saveToLocal(id, key, val) {
  let userInfo = window.localStorage._doubanMovie_;
  if (!userInfo) {
    userInfo = {};
    userInfo[id] = {};
  } else {
    userInfo = JSON.parse(userInfo);
    if (!userInfo[id]) {
      userInfo[id] = {};
    }
  }
  userInfo[id][key] = val;
  window.localStorage._doubanMovie_ = JSON.stringify(userInfo);
}

export function loadFromLocal(id, key, def) {
  let userInfo = window.localStorage._doubanMovie_;
  if (!userInfo) {
    return def; // []
  }
  userInfo = JSON.parse(userInfo)[id];
  if (!userInfo) {
    return def;
  }
  let ret = userInfo[key];
  return ret || def;
}
