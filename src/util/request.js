import axios from 'axios'

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