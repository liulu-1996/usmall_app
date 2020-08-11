import React from 'react'
import './List.css'
import { filterPrice } from '../../../../filters/filters'
import { NavLink } from 'react-router-dom'
export default function List(props) {

    const { list } = props;
    return (
        <div>
            {
                 
                list.map(item => {
                    return (
                        <NavLink to={'/listDetail?id='+item.id}  key={item.id}>
                            <div className='list1'>

                                <div className='left-n'>
                                    <span>
                                        <img src={item.img} />
                                    </span>
                                </div>
                                <div className='right-n'>
                                    <p className='tit'>{item.goodsname}</p>
                                    <p className='money'>￥{filterPrice(388)}</p>
                                    <p className='ct'>立即抢购</p>
                                </div>
                            </div >
                        </NavLink>

                    )
                })
            }
        </div>



    )
}
