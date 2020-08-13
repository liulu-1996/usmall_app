import React, { Component } from 'react'
import './register.css'
import {register} from '../../util/request'
import {successAlert} from '../../util/alert'

export default class Register extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: "",
                password: "",
                nickname:''
            }
        }
    }
    changeUser(e, key) {
        this.setState({
            user: {
                ...this.state.user,
                [key]: e.target.value
            }
        })
    }
    regisert(){
        register(this.state.user).then(res=>{
           if(res.data.code===200){
            successAlert(res.data.msg);
            this.props.history.push('/login')
           }else{
            successAlert(res.data.msg); 
           }
            

        })
    }
    render() {
        const {user}=this.state
        return (
            <div className="login">
                <div className='herD'>
                    注册
                   
                </div>
                <div className='onl'>
                    <div className='onl-N'>
                        <div className='inp'>手机号: <input type="text" value={user.phone} onChange={(e) => this.changeUser(e, "phone")} /></div>
                        <div className='inp'>昵称: <input type="text" value={user.nickname}  onChange={(e) => this.changeUser(e, "nickname")}/></div>
                        <div className='inp'>密码: <input type="text" value={user.password}  onChange={(e) => this.changeUser(e, "password")}/></div>
                        
                        <button onClick={() => this.regisert()}>注册</button>
                    </div>

                </div>

            </div>
        )
    }
}
