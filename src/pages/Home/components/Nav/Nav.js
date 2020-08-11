import React from 'react'
import Nav1 from '../../../../assets/img/img/home/1.jpg'
import './Nav.css'
export default function Nav() {
    return (
        <div className='nav'>
          <ul>
              <li>
                  <img src={Nav1}/>
                  <p>限时抢购</p>
              </li>
              <li>
                  <img src={Nav1}/>
                  <p>积分商城</p>
              </li>
              <li>
                  <img src={Nav1}/>
                  <p>联系我们</p>
              </li>
              <li>
                  <img src={Nav1}/>
                  <p>商品分类</p>
              </li>
          </ul>

        </div>
    )
}
