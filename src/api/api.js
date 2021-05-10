import http from '../config/httpconfig'
// 示例
export const req_userInfo = (params) => {
    return http.get('/wxapp/getWXuserInfo', params)
}