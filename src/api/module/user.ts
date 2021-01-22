import { api } from '@/api/fetch';
/**
 * 登录接口
 * @param {Object} body
 * @return {any}
 */
export const login = (body = {}) =>
  api({
    url: '/system/login',
    method: 'POST',
    body,
  });

/**
 * 获取菜单
 * @return {any}
 */
export const getMenuList = () => {
  return api({
    url: '/system/menu',
    method: 'GET',
  });
};
