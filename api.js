import axios from "./axios";

/**
 * 所有的api, 所有的数据请求
 */

const api = {
  /**
   * 获取热门搜索词
   */
  getHotSearchList: (params) => {
    //返回的是一个promise
    return axios.get("/api/meituan/header/searchHotWords.json", params);
  },

  /**
   * 获取搜索下拉列表的数据
   */
  getSearchList: (params) => {
    return axios.get("/api/meituan/header/search.json", params);
  },

  /**
   * 获取左侧导航栏的数据
   */
  getMenusList: (params) => {
    return axios.get("/api/meituan/index/nav.json", params);
  },

  /**
   * 获取index首页的中间部分的数据
   */
  getMainContent: (params) => {
    return axios.get("/api/meituan/index/resultsByKeywords.json", params);
  },

  /**
   * 获取产品列表的数据
   */
  getItemList: (params) => {
    return axios.get("/api/meituan/list/goodsList.json", params);
  },

  /**
   * 获取热门城市的数据
   */
  getHotCity: (params) => {
    return axios.get("/api/meituan/city/hot.json", params);
  },

  /**
   * 获取最近搜索城市的数据
   */
  getLastCity: (params) => {
    return axios.get("/api/meituan/city/recents.json", params);
  },

  /**
   * 获取省份列表
   */
  getProvinceList: (params) => {
    return axios.get("/api/meituan/city/province.json", params);
  },

  /**
   * 获取当前位置
   */
  getCurLocation: (params) => {
    return axios.get("/api/meituan/city/getPosition.json", params);
  },

  /**
   * 登录请求
   */
  getLogin: (params) => {
    return axios.get("/api/meituan/login", params);
  },

  /**
   * 注册请求
   */
  getRegister: (params) => {
    return axios.get("/api/meituan/register", params);
  },
};

export default api;
