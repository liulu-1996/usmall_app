import React, { Component } from 'react'
import GoBack from '../../../../../components/goBack/goBack'
import querystring from 'querystring'
import { connect } from 'react-redux'
import { sDetail, reqIndexDetailAction,getUser} from '../../../../../store'
import './listDetail.css'
import car from '../../../../../assets/img/img/cart_on.png'
import { filterPrice } from '../../../../../filters/filters'
import {addShop} from '../../../../../util/request'
import {successAlert} from '../../../../../util/alert'

class listDetail extends Component {
    constructor() {
        super()
        this.state = {
            show: false,
           
        }
    }

    componentDidMount() {
        this.id = querystring.parse(this.props.location.search.slice(1)).id;
        this.props.requestDetail(this.id)
    }
    add() {
        this.setState({
            show: true
        })
    }
    addCar(){
        // console.log(this.id,'0000')
        addShop({uid:this.props.user.uid,goodsid: this.id,num:1}).then(res=>{
            
            successAlert(res.data.msg)
            this.setState({
                show: false
            })
        })
       
    }
   
    onColor(e){
       
        if(e.target.className==='r'){
          
            e.target.className='r col'
        }else{
            e.target.className='r'
        }
      
            
      
        //  let num=this.specsattr.findIndex((value, index, array) => {})
       
          
    }

    render() {
        const { detail } = this.props
        // console.log(detail, '12334434343')
        // // console.log(JSON.parse(detail.specsattr))
        const { show} = this.state
        return (
            <div className='nuN'>
                <div className='herD'>
                    <GoBack></GoBack>
                             商品详情
                        </div>
                {
                    detail.map(item => {
                        return (
                            <div key={item.id}>
                                <div className='boxL'>
                                    <img src={item.img}  alt=''/>
                                    <div className='cont'>
                                        <p className='tit'>{item.goodsname}</p>
                                        <p className='shouC'>
                                            <img src={car} className='cars' alt=''/>
                                  收藏
                                 </p>
                                    </div>
                                    <div className='my'>
                                        <p>￥{filterPrice(parseInt(item.price))}</p>
                                        <span>新品</span>
                                        <span>热卖</span>
                                    </div>
                                    <div className='hua'>
                                        <i></i>
                                ￥{filterPrice(parseInt(item.market_price))}
                                    </div>
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
                                <div className='footer'>
                                    <p onClick={() => this.add()}>加入购物车</p>
                                </div>
                                <div >
                                    {
                                        show ? (
                                            <div className='cont1' >
                                                <div className='cont-down'>
                                                    <div className='up'>
                                                        <div className='card'>
                                                            <img src={item.img} alt=''/>
                                                        </div>
                                                        <p>{item.goodsname}</p>
                                                    </div>
                                                    <p className='tit'>{item.specsname}</p>
                                                    <div className='guiG'>
                                                        {
                                                            JSON.parse(item.specsattr).map((i,index) => {
                                                                return (
                                                                    <p className='r' key={i}   onClick={(e)=>this.onColor(e,i)}>{i}</p>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                    <div className='addC'>
                                                        <span onClick={()=>this.addCar()}> 加入购物车</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : null
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state, '22222222222222222')
    return {
        detail: sDetail(state),
         user:getUser(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestDetail: (id) => dispatch(reqIndexDetailAction(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(listDetail)