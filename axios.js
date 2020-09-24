/**
 * 对网络请求进行封装
 */

import axios from 'axios';

const APPKEY = 'caolei_1582596210187'; //appkey值

axios.defaults.baseURL = "http://api.duyiedu.com"; //基本地址

axios.interceptors.request.use(function (config) {
  config.params = {
    ...config.params,
    appkey: APPKEY
  }

  return config;
}, function (err) {
  return Promise.reject(err);
})

export default axios;