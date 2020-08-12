import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import { connect } from 'react-redux'
import { sortList, requestSortAction } from '../../store'
import './sort.css'

class sort extends Component {
    constructor() {
        super();
        this.state = {
            i: 0
        }

    }
    componentDidMount() {
        this.props.requestSort();

    }
    getChild(index) {
        this.setState({
            i: index
        })

    }



    render() {
        const { sortList } = this.props
        const { i } = this.state
        console.log(sortList[i], '8888')
        var arr=sortList.length>0?sortList[i].children:[]
        return (
            <div className='boxS'>
                <div className='hard'>分类</div>
                <div className='bod'>
                    <ul className='leftM'>
                        {sortList.map((item, index) => {
                            return (

                                <li key={item.id} onClick={() => this.getChild(index)}>{item.catename}</li>

                            )
                        })
                        }
                    </ul>
                    < ul className='rightM'>
                        {
                            arr.map(item => {
                                return (
                                    <li key={item.id}>
                                        <NavLink to={'/sortDetail?id='+item.id} >
                                            <img src={item.img} alt=""/>
                                            {item.catename}
                                        </NavLink>

                                    </li>
                                )
                            })

                        }

                    </ul>
                </div>

            </div >

        )
    }
}

const mapStateToProps = (state) => {
    console.log(state, '4444444444')
    return {
        sortList: sortList(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestSort: () => dispatch(requestSortAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(sort)