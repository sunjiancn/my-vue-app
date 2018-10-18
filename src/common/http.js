// 引入 axios
import axios from 'axios'
const qs = require('qs')
// 测试地址
axios.defaults.baseURL = '';
// 线上地址
// axios.defaults.baseURL = '';
// request拦截器
// axios.interceptors.request.use(function (config) {
//     return config;
// }, function (error) {
//   
//   return Promise.reject(error);
// });
var http = {

    /** get 请求
     * @param  {接口地址} url
     */
    get: function (url) {
        return new Promise((resolve, reject) => {
            axios.get(url)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        })
    },
    /** post 请求
     * @param  {接口地址} url
     * @param  {请求参数} params
     */
    post: function (url, params) {
        return new Promise((resolve, reject) => {
            axios.post(url, qs.stringify(params))
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        })
    }
}
export default http