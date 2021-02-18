// import request func from generic api
import { request } from "./generic.api";

const getProducts = () =>
  request({
    method: "get"
  });

export { getProducts };
