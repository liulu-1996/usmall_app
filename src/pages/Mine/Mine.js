import React from 'react'
import './Mine.css'
import shez from '../../assets/img/set.png'
import taol from '../../assets/img/news.png'
import tou from '../../assets/img/1.jpg'
import icon from '../../assets/img/icon_refund.png'
import shou from '../../assets/img/keep.png'
export default function Mine() {
    return (
        <div>
            <div className='box'>
                <div className='top-s'>
                    <img src={shez} alt=''/>
                    <p>个人中心</p>
                    <img src={taol} alt=''/>
                </div>
                <div className='down-s'>
                    <div className='tu'>
                        <div>
                            <img src={tou} alt=''/>
                        </div>
                    </div>
                    <p className='name'>小不点儿</p>
                    <span>
                        <img src={shou} alt=''/>
                         我的收藏(5)
                    </span>
                </div>
            </div>
            <div className='ding'>
                <div>
                    <p>我的订单</p>
                    <p className='chak'>查看订单</p>
                </div>
                <ul>
                    <li>
                        <img src={icon} alt=''/>
                        <p>待发货</p>
                    </li>
                    <li>
                        <img src={icon} alt=''/>
                        <p>待发货</p>
                    </li>
                    <li>
                        <img src={icon} alt=''/>
                        <p>待发货</p>
                    </li>
                    <li>
                        <img src={icon} alt=''/>
                        <p>待发货</p>
                    </li>
                    <li>
                        <img src={icon} alt=''/>
                        <p>待发货</p>
                    </li>
                </ul>
            </div>
            <div className='Smenu'>
                收货地址管理
            </div>
        </div>
    )
}
