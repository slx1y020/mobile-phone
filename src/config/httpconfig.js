import axios from 'axios';
import { Toast } from 'antd-mobile';
import qs from 'qs';
import IP from './config';

let baseUrl = IP.host;
axios.defaults.withCredentials = true;
axios.defaults.timeout = 10000;

const instance = axios.create({
    xsrfCookieName: 'xsrf-token',
    baseURL: baseUrl,
    timeout: 10000,
    responseType: 'json',
});

instance.interceptors.request.use({
    success(config) {
        return config;
    },
    error: error => {
        return Promise.reject(error);
    },
});

instance.interceptors.response.use({
    success(response) {
        if (response.code === 101) {
            Toast.info('101网络错误');
        }
        if (response.code === 500) {
            Toast.info('500参数错误');
        }
        return Promise.resolve(response.data);
    },
    error() {
        Toast.fail('系统异常，请联系管理员！', 1);
    },
});

export default {
    get(url, param) {
        return new Promise(resolve => {
            instance({
                method: 'get',
                url,
                params: param,
            }).then(res => {
                resolve(res.data);
            });
        }).catch((err) => { console.error(err) });
    },
    post(url, param) {
        return new Promise(resolve => {
            instance({
                method: 'post',
                url,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: qs.stringify(param),
            })
                .then(res => {
                    resolve(res.data);
                })
                .catch((err) => { console.error(err) });
        });
    },
    jsonPost(url, param) {
        return new Promise(resolve => {
            instance({
                method: 'post',
                url,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: param,
            })
                .then(res => {
                    resolve(res.data);
                })
                .catch((err) => { console.error(err) });
        });
    },
    upload(url, param) {
        return new Promise((resolve) => {
            instance({
                method: 'post',
                url,
                headers: { 'Content-Type': 'multipart/form-data' },
                data: param
            }).then(res => {
                resolve(res)
            }).catch(err => {
                console.error(err)
            })
        })
    }
};
