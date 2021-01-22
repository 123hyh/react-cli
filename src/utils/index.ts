/**
 * 防抖方法
 * @param { function } handlerFn 需要处理的方法
 * @param { number } time 触发的 事件
 * @param { boolean } immediate 首次调用是否立即触发
 * @return { any }
 */
export const preventShaking = (() => {
  let prev: NodeJS.Timeout | null = null;
  return function preventShaking(
    handlerFn: () => any,
    time: number = 100,
    immediate: boolean = false,
  ) {
    /* 是否立即执行 */
    if (immediate) {
      return handlerFn();
    }
    /* 清空上一个方法 */
    if (prev !== null) {
      clearTimeout(prev);
    }
    prev = setTimeout(() => {
      handlerFn();
      prev = null;
    }, time);
  };
})();
