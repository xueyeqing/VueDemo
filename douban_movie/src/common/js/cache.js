/**
 * Created by a1 on 17/8/16.
 */
import {saveToLocal, loadFromLocal} from './store';
const USER_ID = 'buptsky';
const SEARCH_KEY = '__search__'; // 搜索历史键名
const COMMENT_KEY = '__comment__'; // 搜索历史键名
const WATCHED_KEY = '__watched__'; // 已经看过的电影
const WANTED_KEY = '__wanted__'; // 想看的电影
const CELEBRITY_KEY = '__celebrity__'; // 收藏的影人
const SEARCH_MAX_LENGTH = 20;
const COMMENT_MAX_LENGTH = 100;
const WATCHED_MAX_LENGTH = 100;
const WANTED_MAX_LENGTH = 100;
const CELEBRITY_MAX_LENGTH = 100;

/************************************* 想看 *******************************************/
// 保存标记结果
export function saveWantedMovie(movie) {
  const maxLen = WANTED_MAX_LENGTH;
  let movies = loadFromLocal(USER_ID, WANTED_KEY, []); // 获取不到返回空数组
  // 查找缓存数组中是否包含添加的数据，返回索引
  const index = movies.findIndex((item) => {
    return item.id === movie.id;
  });
  if (index === -1) {
    movies.push(movie);
    // 超过最大长度时移除起始数据
    console.log('length:' + movies.length);
    if (maxLen && movies.length > maxLen) {
      movies.shift();
    }
  } else { // 若已经存在了被标记的id，则代表用户进行了反操作，取消了喜欢
    console.log('取消了');
    movies.splice(index, 1);
  }
  // 存入缓存
  saveToLocal(USER_ID, WANTED_KEY, movies); // 存入缓存
  return movies;
}

// 从缓存中读取
export function loadWantedMovie() {
  return loadFromLocal(USER_ID, WANTED_KEY, []);
}

/************************************* 想看 *******************************************/

/************************************* 看过的电影 *******************************************/
// 保存标记结果
export function saveWatchedMovie(movie) {
  const maxLen = WATCHED_MAX_LENGTH;
  let movies = loadFromLocal(USER_ID, WATCHED_KEY, []); // 获取不到返回空数组
  // 查找缓存数组中是否包含添加的数据，返回索引
  const index = movies.findIndex((item) => {
    return item.id === movie.id;
  });
  if (index === -1) {
    movies.push(movie);
    // 超过最大长度时移除起始数据
    if (maxLen && movies.length > maxLen) {
      movies.shift();
    }
  } else {
    movies.splice(index, 1);
  }
  saveToLocal(USER_ID, WATCHED_KEY, movies); // 存入缓存
  return movies;
}
// 从缓存中读取
export function loadWatchedMovie() {
  return loadFromLocal(USER_ID, WATCHED_KEY, []);
}
/************************************* 看过的电影 *******************************************/
