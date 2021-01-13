import { httpRequest } from "../libs/axios";
import * as qs from "qs";
//
// export function getList(data: Object) {
//   console.log(data);
//   return httpRequest({
//     url: "/getList",
//     method: "post",
//     data: qs.stringify(data),
//   });
// }
export function getHitokoto(params: object) {
  return httpRequest({
    url: "https://v1.hitokoto.cn",
    method: "get",
    headers: {
      Accept: "application/json",
    },
    params,
    paramsSerializer: function (params) {
      return qs.stringify(params, { indices: false, arrayFormat: "repeat" });
    },
  });
}
export function getShanbay(params: object) {
  return httpRequest({
    url: "/apiv3.shanbay.com/weapps/dailyquote/quote",
    method: "get",
    headers: {
      Accept: "application/json",
    },
    params,
    paramsSerializer: function (params) {
      return qs.stringify(params, { indices: false, arrayFormat: "repeat" });
    },
  });
}
