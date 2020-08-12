import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { getIndexGoods, getGoodsinfo, getCate, getGoods, requestShopList,requestShopEdit,requestShopDel } from "../util/request"
//初始状态
const initState = {
    sList: [],//首页列表
    sDetail: [],//首页详情
    sortList: [],//分类列表
    sortgoods: [],//分类商品 
    user: sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : null, //用户
    carList: [],//购物车列表
    isEdit: false,//时候编辑
    isAll: false,//是否全选
}

//action creators
//dispatch(changeMovieAction())

//------------------------首页------------------------------------------

const changeIndexAction = (arr) => {
    return { type: 'changeIndex', list: arr }
}

//页面一进来，就要出发一个请求，dispatch(requestMoviesAction())
export const requestIndexAction = () => {
    //如果在一个action creator中，要处理异步操作，需要return 一个函数  
    return (dispatch, getState) => {
        const { sList } = getState()
        if (sList.length > 0) {
            return;
        }

        //发请求
        getIndexGoods().then(res => {
            //  console.log(res,'11111111111')
            dispatch(changeIndexAction(res.data.list[0].content))
        })
    }
}

export const cIndexDetailAction = (obj) => {
    return { type: "changeIndexDetail", detail: obj }
}
//页面出发的是发起获取详情的请求的action  dispatch(requestDetailAction())
export const reqIndexDetailAction = (id) => {
    return (dispatch, getState) => {
        //这次请求的id和上次请求回来的数据的id是一样的，就不用再次发请求
        if (id === getState().sDetail.id) {
            return;
        }


        //获取详情
        getGoodsinfo({ id: id }).then(res => {
            // console.log(res.data.list[0],'333333333333333')
            dispatch(cIndexDetailAction(res.data.list))
        })
    }
}

// -----------分类---------------------------------------------------------
const changeSortAction = (arr) => {
    return { type: 'changeSort', list1: arr }
}

export const requestSortAction = () => {

    return (dispatch, getState) => {

        const { sortList } = getState()
        if (sortList.length > 0) {
            return;
        }

        //发请求
        getCate().then(res => {
            // console.log(res,'888888888')
            dispatch(changeSortAction(res.data.list))
        })
    }
}

const changeSortGoodsAction = (obj) => {
    return { type: "changeSortGoods", sortgoods: obj }
}
export const reqSortGoodsAction = (id) => {
    return (dispatch, getState) => {

        if (id === getState().sortgoods.id) {
            return;
        }


        //获取详情
        getGoods({ fid: id }).then(res => {
            // console.log(res,'333333333333333')
            dispatch(changeSortGoodsAction(res.data.list))
        })
    }
}

//---------------------------用户---------------------------------------

//修改user的action
export const changeUserAction = user => {
    return {
        type: 'changeUser',
        user
    }
}

//-------------------------------购物车-----------------------------------

export const ChangeShopCarAction = list => ({
    type: 'changeCarlist',
    carList:list
})

export const requestCarListAction = () => {
    return (dispatch, getState) => {
       console.log(getState().user.uid);
        requestShopList({ uid:getState().user.uid}).then(res => {
            // console.log(res,'555555555555555')
            const list = res.data.list ? res.data.list : [];
            list.forEach(item => {
                item.checked = false
            })
            dispatch(ChangeShopCarAction(list))
        })
    }
}

//修改isEdit
export const changeIsEditAction = () => ({
    type: 'changeIseidt'
})

//修改isAll
export const changeIsAllAction = () => ({
    type: "changeIsAll"
})

//修改某条数据的checked
export const changeOneAction = index => ({
    type: "changeOne",
    index
})

//用户在组件点了+ - 
export const requestEditAction = data => {
    return (dispatch) => {
        requestShopEdit(data).then(res => {
            dispatch(requestCarListAction())
        })
    }
}

//删除
export const requestDelAction = id => {
    return (dispatch) => {
        requestShopDel({ id: id }).then(res => {
            dispatch(requestCarListAction())
        })
    }
}

//reducer 修改state
const reducer = (state = initState, action) => {
    switch (action.type) {
        //修改首页的列表
        case 'changeIndex':
            return {
                ...state,
                sList: action.list
            }
        //修改首页的详情 
        case 'changeIndexDetail':
            return {
                ...state,
                sDetail: action.detail
            }
        case 'changeSort':
            return {
                ...state,
                sortList: action.list1
            }
        case 'changeSortGoods':
            return {
                ...state,
                sortgoods: action.sortgoods
            }
            //用户
        case 'changeUser':
            return {
                ...state,
                user: action.user
            }
            //购物车
        case "changeCarlist":
            return {
                ...state,
                carList: action.carList
            }
        case "changeIseidt":
            return {
                ...state,
                isEdit: !state.isEdit
            }
        case "changeIsAll":

            return {
                ...state,
                isAll: !state.isAll,
                carList: state.carList.map(item => {
                    item.checked = !state.isAll;
                    return item
                })
            }
        case "changeOne":
            const { carList } = state
            carList[action.index].checked = !carList[action.index].checked
            return {
                ...state,
                carList: [...carList],
                isAll: carList.every(item => item.checked)
            }
        default:
            return state;
    }


}

//创建仓库
const store = createStore(reducer, applyMiddleware(thunk));

//导出数据
export const sList = (state) => state.sList
export const sDetail = state => state.sDetail
export const sortList = (state) => state.sortList
export const sortgoods = (state) => state.sortgoods
export const getUser = (state) => state.user
export const shopList = (state) => state.carList
export const isEdit = (state) => state.isEdit
export const isAll = (state) => state.isAll
export const getAllPrice=(state)=>{
    const {carList}=state
    return carList.reduce((val,item)=>item.checked?val+item.price*item.num:val,0)
}
export default store








