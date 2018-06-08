// 引入axios
import axios from 'axios'

// 引入qs
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = 'http://localhost:80'

// post请求传参序列化
axios.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 返回状态判断
axios.interceptors.response.use(
  res => {
    if (!res.data.success) {
      return Promise.reject(res)
    }
    return res
  },
  error => {
    // 404等问题可以在这里处理
    return Promise.reject(error)
  }
)

// 公共请求方法
// export function postForResult (url, params) {
//   return new Promise((resolve, reject) => {
//     axios
//       .post(url, params)
//       .then(
//         response => {
//           resolve(response.data)
//         },
//         err => {
//           reject(err)
//         }
//       )
//       .catch(error => {
//         reject(error)
//       })
//   })
// }

// 业务方法
// export default {
//   getAddressJson () {
//     return fetch('/address/', { addressId: 1 })
//   }
// }

export default {
  postForResult (url, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, params)
        .then(
          response => {
            resolve(response.data)
          },
          err => {
            reject(err)
          }
        )
        .catch(error => {
          reject(error)
        })
    })
  }
}
