import axios from 'axios'
import qs from 'qs'
import store from '../store'
//请求拦截
axios.interceptors.request.use(config => {
    if (config.url !=='/api/login') {
        config.headers.authorization = store.getState().user.token;
    }
    return config
})
//响应拦截
axios.interceptors.response.use(res=>{
    console.log(res);
    return res;
})

//获取banner图
export const getBanner=()=>{
    return axios({
        url:'/api/getbanner',
        method:'get',
    })
}

export const getIndexGoods=()=>{
    return axios({
        url:"/api/getindexgoods",
        method:"get"
    })
}


export const getCate=()=>{
    return axios({
        url:"/api/getcatetree",
        method:"get"
    })
}

//获取一个商品信息
export const getGoodsinfo=(params)=>{
    return axios({
        url:"/api/getgoodsinfo",
        method:"get",
        params
    })
}
//获取分类商品
export const getGoods=(params)=>{
    return axios({
        url:"/api/getgoods",
        method:"get",
        params
    })
}

//登录
export const login = (data) => {
    return axios({
        url: "/api/login",
        method: "post",
        data: qs.stringify(data)
    })
}

//注册
export const register = (data) => {
    return axios({
        url: "/api/register",
        method: "post",
        data: qs.stringify(data)
    })
}
//加入购物车
export const addShop = (data) => {
    return axios({
        url: "/api/cartadd",
        method: "post",
        data: qs.stringify(data)
    })
}

//购物车列表
export const requestShopList = (data) => {
    return axios({
        url: "/api/cartlist",
        params: data
    })
}

//修改
export const requestShopEdit = (data) => {
    return axios({
        url: "/api/cartedit",
        method:"post",
        data: qs.stringify(data)
    })
}

//删除
export const requestShopDel = (data) => {
    return axios({
        url: "/api/cartdelete",
        method:"post",
        data: qs.stringify(data)
    })
}