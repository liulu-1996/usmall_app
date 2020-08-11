import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { getIndexGoods,getGoodsinfo,getCate, getGoods} from "../util/request"
//初始状态
const initState={
   sList:[],//首页列表
   sDetail:[],//首页详情
   sortList:[],//分类列表
   sortgoods:[],//分类商品 
}

//action creators
//dispatch(changeMovieAction())

const changeIndexAction=(arr)=>{
    return {type:'changeIndex',list:arr}
}


//页面一进来，就要出发一个请求，dispatch(requestMoviesAction())
export const requestIndexAction=()=>{
  //如果在一个action creator中，要处理异步操作，需要return 一个函数  
   return (dispatch,getState)=>{
     const {sList}=getState()
     if(sList.length>0){
         return;
     }

     //发请求
     getIndexGoods().then(res=>{
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
        if(id===getState().sDetail.id){
            return;
        }


        //获取详情
        getGoodsinfo({id:id}).then(res => {
            // console.log(res.data.list[0],'333333333333333')
            dispatch(cIndexDetailAction(res.data.list))
        })
    }
}

// -----------分类--------------
const changeSortAction=(arr)=>{
     return {type:'changeSort',list1:arr}
}
//页面一进来，就要出发一个请求，dispatch(requestMoviesAction())
export const requestSortAction = () => {
    //如果在一个action creator中，要处理异步操作，需要return 一个函数
    return (dispatch, getState) => {
        //缓存层 有数据了就不再二次发起请求
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

const changeSortGoodsAction=(obj)=>{
    return { type: "changeSortGoods", sortgoods: obj }
}
export const reqSortGoodsAction = (id) => {
    return (dispatch, getState) => {
        //这次请求的id和上次请求回来的数据的id是一样的，就不用再次发请求
        if(id===getState().sortgoods.id){
            return;
        }


        //获取详情
        getGoods({fid:id}).then(res => {
            // console.log(res,'333333333333333')
            dispatch(changeSortGoodsAction(res.data.list))
        })
    }
}
//reducer 修改state
const reducer =(state=initState,action)=>{
    switch(action.type){
        //修改首页的列表
        case 'changeIndex':
            return {
                ...state,
                sList:action.list
            }
         //修改首页的详情 
         case 'changeIndexDetail':
             return {
                 ...state,
                 sDetail:action.detail
             } 
        case 'changeSort':
            return{
                ...state,
                sortList:action.list1
            } 
        case 'changeSortGoods':
            return{
                ...state,
                sortgoods:action.sortgoods
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
export const sortList=(state)=>state.sortList
export const sortgoods=(state)=>state.sortgoods

export default store








