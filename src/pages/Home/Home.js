import React, { Component } from 'react'
import {connect} from "react-redux"
import Banner from "./components/Banner/Banner"
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import List from "./components/List/List"

import { sList, requestIndexAction } from '../../store'
import { getBanner} from '../../util/request'
class Index extends Component {
    constructor() {
        super()
        this.state = {
            banner: [],
            // list: []
        }
    }
    componentDidMount() {
        getBanner().then(res => {

            var arr = res.data.list;
            arr.forEach(item => {
                item.img = this.$img + item.img
            })
            this.setState({
                banner: arr
            })
        })
      this.props.reqIndexList(); 
    //     getIndexGoods().then(res => {
    //         // console.log(res, '888888888888888888')
    //         var arr = res.data.list[0].content;
    //         arr.forEach(item => {
    //             item.img = this.$img + item.img
    //         })
    //         this.setState({
    //             list: arr
    //         })
    //     })
 }

    render() {
        const { banner} = this.state
        const {list}=this.props
        return (
            <div>
                <Header></Header>
                <Banner banner={banner}></Banner>
                <Nav></Nav>
                <List list={list} ></List>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    //  console.log(state)   
    return{
        list:sList(state)
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        reqIndexList:()=>dispatch(requestIndexAction())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Index)