/**
 * Created by a1 on 17/6/28.
 */

/**
 * 如：https://www.baidu.com/home/news/data/newspage?nid=4330552084590160075&n_type=0&p_from=1
 * @param url
 * {https://www.baidu.com/home/news/data/newspage?nid: "4330552084590160075", n_type: "0", p_from: "1"}
 */
export function param2Obj(url) { // 如 https://api-dev/user/info?token=editor
  const search = url.split('?')[1];
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
  //  返回：token=editor
}

export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time == 'object') {
    date = time;
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000;
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1];
    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }
    return value || 0;
  });
  return time_str;
}

export function formatTotime(date, cFormat) {
  date = new Date(Date.parse(date.replace(/-/g, '/')));
  date = date.getTime();
  // date 时间戳

  return parseTime(date, cFormat);
}
