import React, { Component } from 'react'
import sRcard from '../../assets/img/store.png'
import selY from '../../assets/img/radio_hig.png'
import selN from '../../assets/img/radio_nor.png'
import editY from '../../assets/img/editor_hig.png'
import editN from '../../assets/img/editor_nor.png'
import { filterPrice } from '../../filters/filters'
import {
    shopList,
    requestCarListAction,
    isEdit,
    requestEditAction,
    changeIsEditAction,
    requestDelAction,
    isAll,
    changeIsAllAction,
    changeOneAction,
    getAllPrice,

} from '../../store'
import { connect } from 'react-redux'
import { successAlert } from '../../util/alert'
import './Detail.css'
class Detail extends Component {
    componentDidMount() {
        this.props.requestList()
    }
    sub(item) {
        if (item.num <= 1) {
            successAlert('宝贝不能再少了');
            return
        }
        this.props.requestEditAction({ id: item.id, type: 1 })
    }
    render() {
        const {
            shopList,
            changeIsEditor,
            isEdit,
            requestEditAction,
            changeIsAll,
            requestDelAction,
            isAll,
            changeOne,
            getAllPrice
        } = this.props
        return (
            <div className='boxD'>
                <div className='hers'>
                    购物车
               </div>
                {
                    shopList.map((item, index) => {
                        return (
                            <div className='conte1' key={item.id}>
                                <div className='room'>
                                    <img src={sRcard} />
                                                 杭州保税区仓库
                                </div>
                                <div className={isEdit ? 'Goods inner-del' : 'Goods'}>
                                    <div className='sel'>
                                        <img onClick={() => changeOne(index)} src={item.checked ? selY : selN} />
                                    </div>
                                    <div className='goodsC'>
                                        <img className='tu' src={item.img} />
                                    </div>
                                    <div className='center'>
                                        <p className='ming'>{item.goodsname}</p>
                                        <span onClick={() => this.sub(item)}>-</span>
                                        <span>{item.num}</span>
                                        <span onClick={() => requestEditAction({ id: item.id, type: 2 })}>+</span>
                                        <p className='mon'>总价:{filterPrice(item.price*item.num)}</p>
                                    </div>
                                    <div className='right'>
                                        <p className='pric'>￥{filterPrice(item.price)}</p>
                                    </div>
                                    <div className='del' onClick={() => requestDelAction(item.id)}>
                                        删除
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                {/* 底部的全选反选 */}
                <div className="shop-footer">
                    {/* 全选 */}
                    <div className="all" onClick={() => changeIsAll()}>
                        <img src={isAll ? selY : selN} alt="" />
                        <div>全选</div>
                    </div>
                    {/* 编辑 */}
                    <div className="all" onClick={() => changeIsEditor()}>
                        <img src={isEdit ? editY : editN} alt="" />
                        <div>编辑</div>
                    </div>
                    {/* 总价 */}
                    <div className="all">￥{filterPrice(getAllPrice)}</div>
                    <div className='jieS'>
                        去结算
                        </div>
                </div>
            </div>
        )
    }

}
const mapState = state => {
    console.log(state, '666666');
    return {
        shopList: shopList(state),
        isEdit: isEdit(state),
        isAll: isAll(state),
        getAllPrice: getAllPrice(state)
    }
}
const mapDispatch = dispatch => {
    return {
        requestList: () => dispatch(requestCarListAction()),
        changeIsEditor: () => dispatch(changeIsEditAction()),
        changeIsAll: () => dispatch(changeIsAllAction()),
        changeOne: (index) => dispatch(changeOneAction(index)),
        requestEditAction: (data) => dispatch(requestEditAction(data)),
        requestDelAction: id => dispatch(requestDelAction(id))
    }
}
export default connect(mapState, mapDispatch)(Detail)