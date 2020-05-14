type RequestParams = {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  headers?: any;
  cache?: 'default' | 'no-cache' | 'reload' | 'force-cache' | 'only-if-cached';
  credentials?: 'include' | 'same-origin';
  referrer?: 'client' | 'no-referrer';
  mode?: 'no-cors' | 'cors';
};
/**
 * fetch 实例
 * @return {any}
 */
class FetchData {
  private baseUrl: string;
  /**
   * 无
   */
  constructor() {
    this.baseUrl = process.env.NODE_ENV === 'production' ? '/test': '/service';
  }
  /**
   * 查看 token 集合
   * @return {any}
   */
  public static getAllToken() {
    return JSON.parse(JSON.stringify(FetchData.Token));
  }
  /**
   * token 集合
   */
  protected static Token: { [prop: string]: string } = {};

  /**
   * 设置 token 集合
   * @param {string} name key
   * @param {string} value value
   */
  protected setToken(name: string, value: string | null) {
    if (value === null) return;
    FetchData.Token[name] = value;
  }
  /**
   * 出口方法
   * @param {string} url 请求地址
   * @param {object} headers 请求头
   * @param { object } params 剩余参数
   * @return {object}
   */

  // eslint-disable-next-line require-jsdoc
  async send({url, headers, ...params}: RequestParams) {
    let result: Promise<any> | Response;
    try {
      headers = new Headers({
        'content-type': 'application/json',
        ...headers, ...FetchData.Token,
      });
      url = this.baseUrl + url;
      params.body &&(params.body = JSON.stringify(params.body));
      result = await fetch(url, {
        ...params,
        headers,
      });

      this.setToken('authorization', result.headers.get('authorization'));

      result = await result.json();
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
/**
 * service 实例
 */
export const service = new FetchData();
/**
 * 出口方法
 */
export const api = service.send.bind(service);
/**
 * 获取 token集合
 */
export const getAllToken = FetchData.getAllToken;
