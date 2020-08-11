import React, { Component } from 'react'
import { filterPrice } from '../../../filters/filters'

import GoBack from '../../../components/goBack/goBack'
import './sortDetial.css'
import { connect } from 'react-redux'
import querystring from "querystring"
import { sortgoods, reqSortGoodsAction } from '../../../store';


class sortDetail extends Component {
    componentDidMount() {
        const id = querystring.parse(this.props.location.search.slice(1)).id
        this.props.requestSortGoods(parseInt(id))
    }
    render() {
        const { sortgoods } = this.props
        // var obj=sortgoods
        // console.log(sortgoods, '999999999')
        return (
            <div>
                <div className='herD'>
                    <GoBack></GoBack>
                   电视
                </div>
                {
                    sortgoods.map(item => {
                        return (
                            <div className='list1' key={item.id}>




                                <div className='left-n'>

                                    <span>
                                        <img src={item.img} />
                                    </span>
                                </div>
                                <div className='right-n'>
                                    <p className='tit'>{item.goodsname}</p>
                                    <p className='money'>￥{filterPrice(item.price)}</p>
                                    <p className='ct'>立即抢购</p>
                                </div>
                            </div >
                        )
                    })
                }

            </div>
        )
    }
}

const mapState = (state) => {
    console.log(state, '23422222222')
    return {
        sortgoods: sortgoods(state)
    }
}
const mapDispatch = (dispatch) => {
    return {
        requestSortGoods: (id) => dispatch(reqSortGoodsAction(id))
    }
}
export default connect(mapState, mapDispatch)(sortDetail)

