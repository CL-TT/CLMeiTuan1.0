/**
 * 工具库函数
 */

/**
 * 防抖函数的封装
 */
const debounce = (methods, delay) => {
  let timer = null;
  return function() {
    clearTimeout(timer);

    timer = setTimeout(() => {
      methods.call(this, ...arguments);
    }, delay);
  };
};

export default {
  debounce,
};
