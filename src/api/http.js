import axios from "axios"

// 请求拦截器axios.interceptors.require
// 响应拦截器axios.interceptors.response

axios.interceptors.response.use((ret => {
    return ret.data || ret
}))

export default axios