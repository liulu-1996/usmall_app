import React, { Component } from 'react'
import { Switch, Route, Redirect, NavLink } from "react-router-dom"
import Home from '../Home/Home'
import Mine from '../Mine/Mine'
import Detail from '../Detail/Detail'
import sort from '../sort/sort'

import './Index.css'
import iocnI from '../../assets/img/tab_home_nor.png'
import menu_nor from '../../assets/img/tab_menu_nor.png'
import shop_nor from '../../assets/img/tab_shopping_nor.png'
import me_nor from '../../assets/img/tab_me_nor.png'
export default class Index extends Component {
    render() {
        return (
            <div className="index">
                {/* 二级路由出口 */}
                <Switch>
                    <Route path="/index/home" component={Home}></Route>
                    <Route path="/index/detail" component={Detail}></Route>
                    <Route path="/index/mine" component={Mine}></Route>
                    <Route path="/index/sort" component={sort}>
                        
                    </Route>
                    <Redirect to="/index/home"></Redirect>
                </Switch>


                <footer>
                    <NavLink to="/index/home" activeClassName="select">
                        <img src={iocnI} />
                        <p>首页</p>
                    </NavLink>
                    <NavLink to="/index/sort" activeClassName="select">
                        <img src={menu_nor} />
                        <p>分类</p>
                    </NavLink>
                    <NavLink to="/index/detail" activeClassName="select">
                        <img src={shop_nor} />
                        <p>购物车</p>
                    </NavLink>
                    <NavLink to="/index/mine" activeClassName="select">
                        <img src={me_nor} />
                        <p>我的</p>
                    </NavLink>
                </footer>
            </div>
        )
    }
}
