import axios from "axios";
import Config from "./config";

var api = axios.create({
  baseURL: Config.baseUrl,
  timeout: 300000
});

// request添加请求拦截器
api.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    const user = JSON.parse(localStorage.getItem("user")) || {};
    if (user) {
      config.headers["user"] = user._id;
    }
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

/* 封装get请求 */
const get = async (url, data) => {
  let response = await api.get(url, data).catch(error => {
    /* .then可以省略不写 */
    errorHandler(error);
  });
  return responseHandler(response);
};

/* 封装post请求 */
const post = async (url, data) => {
  let response = await api.post(url, data).catch(error => {
    /* .then可以省略不写 */
    errorHandler(error);
  });
  return responseHandler(response);
};

/* 封装put请求 */
const put = async (url, data) => {
  let response = await api.put(url, data).catch(error => {
    /* .then可以省略不写 */
    errorHandler(error);
  });
  return responseHandler(response);
};

/* 封装del请求 */
const del = async (url, data) => {
  const response = await api.request({ url, data, method: "delete" });
  // errorHandler(error)
  // return response.data
  return responseHandler(response);
};

// 公共处理错误的方法
const errorHandler = error => {
  console.log("error==>", error.response);
  let errorMsg =
    (error.response && error.response.data && error.response.data.message) ||
    "请求错误，请重试"; // 如果前两个成立 返回最后一个
  alert(errorMsg);
};

// 公共处理返回体的方法
const responseHandler = response => {
  console.log("axios this", this);
  console.log("response", response);
  if (response && response.status === 200) {
    if (!response.data) {
      return {};
    } else {
      return response.data;
    }
  } else {
    /* 此处else可以不写 因为上面判断后返回就不会再执行 */
    return null;
  }
};

export { post, get, del, put };
