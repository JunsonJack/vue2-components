import axios from 'axios'
import { Message, MessageBox } from "element-ui"
import qs from 'qs'
import Nprogress from 'nprogress'
// 环境切换
// if(process.env.NODE_ENV == 'development'){
//     // 测试请求地址
//     axios.defaults.baseURL = '/api'

// }else if (process.env.NODE_ENV == 'debug'){
//     axios.defaults.baseURL = ''
// }else if(process.env.NODE_ENV == 'production'){
//     // 正式库的请求地址
//     axios.defaults.baseURL = 'https://www.fastmock.site/mock/d807c7f9a1a4f63bb89d5d756724aa6c/demo'
// }

axios.defaults.baseURL = "https://www.fastmock.site/mock/d807c7f9a1a4f63bb89d5d756724aa6c/demo"
axios.defaults.timeout = 100 * 60 * 10 //ms
axios.defaults.headers["Content-Type"] = "application/json;charset=UTF-8"

function addInterceptors(axiosInstance) {
    // 请求拦截器
    axiosInstance.Interceptors.request.use(config => {
        Nprogress.start()

        let userToken = window.localStorage.getItem(USER_TOKEN)
        if (userToken) {
            config.headers['Authorization'] = userToken
        }
        return config
    },
        error => {
            console.log('请求发送失败', error)
            MessageBox.alert('请求发送失败', '错误提示')
        })
    axiosInstance.Interceptors.response.use(resultWrapper => {
        Nprogress.done()

        let result = resultWrapper.data
        if (result.success) {
            return success
        } else {
            MessageBox.alert(result.msg, '错误提示')
            return Promise.reject(result)
        }
    }, error => {
        console.log('服务器响应失败')
        return Promise, reject('服务器响应失败')
    })
}

// 用来发送get请求的axios实例
let getInstance = axios.create()
addInterceptors(getInstance)

// post  表单
let formPostInstance = axios.create({
    method: 'post',
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    transformRequest: [function (data, headers) {
        console.log("data:", data)
        return qs.stringify(data)
    }]
})
addInterceptors(formPostInstance)

// 普通post
let appJsonPostInstance = axios.create({
    method: "post"
})
addInterceptors(appJsonPostInstance)

// 暴露
export function doGet(config) {
    return getInstance(config)
}

export function formPost(config) {
    return formPostInstance(config)
}

export function appJsonPost(config) {
    return appJsonPostInstance(config)
}