import React from 'react';
import {
    Link,
    useHistory
} from "react-router-dom";

export default function Sider({ setIsShow }) {

    let history = useHistory()

    let controlC = (e) =>{
        
        /* 禁止a标签默认操作  否则会往herf上跳*/
        e.preventDefault();

        let user = localStorage.getItem('user');

        if(!user){
            /* 显示modal */
            setIsShow(true)
            console.log(1)
        }else{
            history.push('/c',{
                test:123
            })
        }
    }

    return (
        <div className={'sider'}>
            <ul>

                <li>

                    <Link to='/a/123/333'>A</Link>
                </li>

                <li>

                    <Link to='/b'>B</Link>
                </li>

                

                <li><a href='' onClick={ controlC }>C</a></li>

                {/* <li> <Link to='/c' onClick={ controlC }>C</Link></li> */}
               

                <li>

                    <Link to='/d'>D</Link>
                </li>
            </ul>

            <button onClick={()=>{
                history.push('/a')
            }}>click</button>
        </div>
    )
}
