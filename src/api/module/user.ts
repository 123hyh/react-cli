import { api } from '@/api/fetch';
/**
 * 登录接口
 * @param body
 */
export const login = (body = {}) =>
  api({
    url: '/auth/login?userCode=hyh&password=e10adc3949ba59abbe56e057f20f883e',
    method: 'POST',
  });
