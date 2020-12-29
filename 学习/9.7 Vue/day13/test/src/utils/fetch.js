import axios from "axios"
import Config from "./config"


var api = axios.create({
    baseURL: Config.baseURL,
    timeout:300000
})

// 添加请求拦截器
api.interceptors.request.use( (config)=> {
    // 
    config.headers["user"] ='5f69cd1b0023164a8b9f3ee3'
    return config;
  }, function (error) {
      console.log()
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
api.interceptors.response.use( (response)=> {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });


  /* 挂载在全局 写在main.js */
  /* 封装get请求 */
const get = async (url,data) =>{
    const response = await api.get(url,data).catch(error =>{
      // console.log('xxx get error===>',error)
      errorHandler(error)
    })
    // return response.data
    /* 层级多的时候封装一个函数 统一处理返回体 */
    return responseHandler(response)
} 

/* 封装post请求 */
const post = async (url,data) =>{
    const response = await api.post(url,data).catch(error =>{
        // console.log('xxx get error===>',error)
        errorHandler(error)

    })
    // return response.data
    return responseHandler(response)
} 

/* 封装put请求  按post请求方式传参*/
const put = async (url,data) =>{
  const response = await api.put(url,data).catch(error =>{
      // console.log('xxx get error===>',error)
      errorHandler(error)

  })
  // return response.data
  return responseHandler(response)
}

/* 封装delete请求   写法和其他请求不同 按post请求方式传参*/
const del = async (url,data) =>{
  const response = await api.request({url,data,method:'delete'})
      // errorHandler(error)
  // return response.data
  return responseHandler(response)
}

/* 统一处理返回体的函数 */
function responseHandler(response) {
  console.log('response==>',response)
  if (response && response.status === 200) {
    if (!response.data) {
      return {}
    }
    return response.data
  }
  return null
}

/* 统一处理错误返回体 */
function errorHandler(error) {
  console.log('xxx get error===>',error.response) // error是个对象 所以可以.
  let errorMsg = (error.response && error.response.data && error.response.data.message) || '请求错误，请重试' // 如果前两个成立 返回最后一个
  console.log('///',errorMsg)
  alert(errorMsg)
}


//   export { api }
export { 
  get , 
  post,
  put,
  del
}
