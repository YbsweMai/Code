import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';

/* hooks */
import { useMousePosition } from './Hook/useMousePostion';

/* components */
import Child from './Component/Child';
import Name from './Component/Name';

import Header from './Component/Header';
import Sider from './Component/Sider';
import A from './Component/A';
import B from './Component/B';
import C from './Component/C';
import D from './Component/D';
import Modal from './Component/Modal/Modal'


/* router */
import PrivateRouter from './Router/PrivateRouter'

function App() {

  // let {x,y} = useMousePosition();

  let [ name , setName ] = useState('isen');

  let [isShow , setIsShow] = useState(false);

  // let [ flag , setFlag ] = useState(false)

  // localStorage.setItem('user','isen')
  // let user = localStorage.getItem('user');

  // let flag = false;
  
  // if(user){
  //   flag = true;
  // }
  // console.log(flag)

  return (
    // <div className="App">

    //   <div >

    //   <button onClick={()=>{

    //       setName('lucy')
    //       }}>click</button>
    //   </div>
       
      
    //    {/* <Child></Child> */}

    //    <Name name={name}></Name>


       
    // </div>
    <Router>

        <div className={'main'}>

          <Header></Header>

          {/* <button onClick={()=>{
            setFlag(!flag)
          }}>click</button> */}

          <div className={'main-container'}>

              <Sider setIsShow={ setIsShow }></Sider>
              
              {/* <Switch>

                  <Route path='/a'>
                    { flag ? <A></A> : <Redirect to='/b'></Redirect>}
                  </Route>
                  <Route path='/b'>
                    <B></B>
                  </Route>

              </Switch> */}

              <Switch>

                  <Route path='/a' component={ A }>
                  </Route>

                  <Route path='/b' component={ B }>
                  </Route>

                  <PrivateRouter path='/c' component={ C }>
                  </PrivateRouter> 

                  <PrivateRouter path='/d' component={ D }>
                  </PrivateRouter>

                  {/* <PrivateRouter path='/login' component={ <div>login</div> }>
                  </PrivateRouter> */}
                  <Route path='/login'>
                    <div>login</div>
                  </Route>

              </Switch>
          </div>
          <Modal isShow={ isShow } setIsShow={ setIsShow }/>
        </div>
        
  
        
      

    </Router>


  );
}

export default App;
