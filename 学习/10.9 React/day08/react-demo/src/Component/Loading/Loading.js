import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { closeBtn } from '../../action'


import './loading.css';
export default function Loading() {

    let isLoading = useSelector(state => state.loading.isLoading);
    let message = useSelector(state => state.loading.data.message);
    let dispatch = useDispatch()
    
    return (
        
        isLoading ? <div className='loading'>
            
            <div className='loading-content'>
                <div>弹框由{ message }打开</div>
                <button onClick={()=>{
                    dispatch(closeBtn())
                }}>确定</button>
            </div>
        </div> : null
    )
}
