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
 */
class FetchData {
  private baseUrl: string;
  constructor() {
    this.baseUrl = '/test';
  }
  /**
   * 查看 token 集合
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
   * @param name
   * @param value
   */
  protected setToken(name: string, value: string | null) {
    if (value === null) return;
    FetchData.Token[name] = value;
  }
  /**
   * 出口方法
   * @param param0
   */

  async send({ url, headers, ...params }: RequestParams) {
    let result: Promise<any> | Response;
    try {
      headers = new Headers({ ...headers, ...FetchData.Token });
      url = this.baseUrl + url;
      result = await fetch(url, {
        ...params,
        headers,
      });

      this.setToken('x-auth-token', result.headers.get('x-auth-token'));

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
