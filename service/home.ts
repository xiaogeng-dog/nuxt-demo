import request from "./index";
import type { IResultData } from "./index";

export const fetchHomeInfoData = () => {
  return request.get<IResultData<any>>("/homeInfo");
};
