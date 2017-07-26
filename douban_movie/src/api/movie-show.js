/**
 * Created by a1 on 17/7/26.
 */
import axios from 'axios';
import {commonParams} from './config';

export function getMovie(start, count) {
  const url = '/v2/movie/in_theaters';
  const data = Object.assign({}, commonParams, {start, count});
  return axios.get(url, {params: data})
    .then((res) => {
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}