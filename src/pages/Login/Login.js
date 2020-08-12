import React, { Component } from 'react'

import "./Login.css"
import { login } from '../../util/request'
import { successAlert } from '../../util/alert.js'
import {connect} from "react-redux"
import {changeUserAction} from "../../store"
class Login extends Component {
    constructor(){
        super()
        this.state={
            user:{
                phone:"",
                password:""
            }
        }
    }
    //修改user 
    changeUser(e,key){
        this.setState({
            user:{
                ...this.state.user,
                [key]:e.target.value
            }
        })
    }
    login(){
        console.log(this.state.user)
        login(this.state.user).then(res=>{
            if(res.data.code===200){

                successAlert("登录成功")
                //要把res.data.list 存进redux/user/user 
                this.props.changeUser(res.data.list)
                sessionStorage.setItem("user",JSON.stringify(res.data.list))
                this.props.history.push("/index")
            }else{
                successAlert(res.data.msg)
            }
        })
    }
    render() {
        const {user}=this.state
        return (
            <div className="login">
                <div className='herD'>
                    登录
                    <span className='zec'>注册</span>
                </div>
                <div className='onl'>
                <div className='inp'>账号: <input type="text" value={user.phone} onChange={(e)=>this.changeUser(e,"phone")}/></div>
                <div className='inp'>密码: <input type="text" value={user.password} onChange={(e)=>this.changeUser(e,"password")}/></div>
                <button onClick={()=>this.login()}>登录</button>
                </div>
                
            </div>
        )
    }
}
const mapState=(state)=>{
    console.log(state)
    return {
      
    }
}
const mapDispatch=(dispatch)=>{
    return {
        changeUser:(user)=>dispatch(changeUserAction(user))
    }
}
export default connect(mapState,mapDispatch)(Login)
