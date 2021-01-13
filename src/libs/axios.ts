import ssss from "axios";
import axios from "axios";

console.log(axios);
const baseURL = "http://llow22.com";
const instance = ssss.create({
  baseURL,
});
export const httpRequest = instance.request;
