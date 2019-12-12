import request from "@/utils/request";

export const loginApi = (data: any) =>
  request({
    url: "/users/login",
    method: "post",
    data,
  });
