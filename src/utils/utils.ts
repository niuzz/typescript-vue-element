/**
 * 解析搜索参数为对象
 * @param url url 地址
 */
export const param2Obj = function(url: string): object {
  const search = url.split("?")[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}',
  );
};

export default {
  param2Obj,
};
