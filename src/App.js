import React from 'react';
import Index from './pages/Index/Index'
import Home from './pages/Home/Home'
import sort from './pages/sort/sort'
import Detail from './pages/Detail/Detail'
import sortDetail from './pages/sort/components/sortDetail'
import listDetail from './pages/Home/components/List/components/listDetail'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import {Switch,Route,Redirect} from 'react-router-dom'
function App() {
  return (
    <div>
      <Switch>
      <Route path="/login" component={Login}></Route>
        <Route path='/index' component={Index}></Route>
        <Route path='/home' component={Home}></Route>
        <Route path='/detail' component={Detail}></Route>
        <Route path='/sort' component={sort}></Route>
        <Route path='/sortDetail' component={sortDetail}></Route>
        <Route path='/listDetail' component={listDetail}></Route>
        <Route path="/register" component={Register}></Route>
        <Redirect to='/login'></Redirect>
      </Switch>
    </div>
  )
}

export default App;
