import React, { Component } from 'react'
import { Switch, Route, Redirect, NavLink } from "react-router-dom"
import Home from '../Home/Home'
import Mine from '../Mine/Mine'
import Detail from '../Detail/Detail'
import sort from '../sort/sort'

import './Index.css'
import homeN from '../../assets/img/tab_home_nor.png'
import homeY from '../../assets/img/tab_home_hig.png'
import menu_N from '../../assets/img/tab_menu_nor.png'
import menu_Y from '../../assets/img/tab_menu_hig.png'
import shop_N from '../../assets/img/tab_shopping_nor.png'
import shop_Y from '../../assets/img/tab_shopping_hig.png'
import me_N from '../../assets/img/tab_me_nor.png'
import me_Y from '../../assets/img/tab_me_hig.png'
export default class Index extends Component {
    constructor() {
        super()
        this.state = {
            Nav: [
                {
                    path: '/index/home',
                    selN: homeN,
                    selY: homeY,
                    navname: '首页'
                },
                {
                    path: '/index/sort',
                    selN: menu_N,
                    selY: menu_Y,
                    navname: '分类'
                },
                {
                    path: '/index/detail',
                    selN: shop_N,
                    selY: shop_Y,
                    navname: '购物车'
                },
                {
                    path: '/index/mine',
                    selN: me_N,
                    selY: me_Y,
                    navname: '我的'
                },
            ]
        }
    }

    render() {
        const { Nav } = this.state
        return (
            <div className="index">
                {/* 二级路由出口 */}
                <Switch>
                    <Route path="/index/home" component={Home}></Route>
                    <Route path="/index/detail" component={Detail}></Route>
                    <Route path="/index/mine" component={Mine}></Route>
                    <Route path="/index/sort" component={sort}></Route>
                    <Redirect to="/index/home"></Redirect>
                </Switch>


                <footer>
                    {
                        Nav.map(item => {
                            return (
                                <NavLink to={item.path} activeClassName="select" key={item.path}>
                                    <img src={item.path === this.props.location.pathname ? item.selY : item.selN} />
                                    <p>{item.navname}</p>
                                </NavLink>
                            )
                        })
                    }
                    {/* <NavLink to="/index/sort" activeClassName="select">
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
                    </NavLink> */}
                </footer>
            </div>
        )
    }
}
