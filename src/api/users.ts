import request from "@/utils/request";

export const loginApi = (data: any) =>
  request({
    url: "/users/login",
    method: "post",
    data,
  });

export const getUserInfo = (data: any) => {
  request({
    url: "/users/info",
    method: "post",
    data,
  });
};
