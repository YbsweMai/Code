import React,{ useState, useEffect,useRef } from 'react';

function Control(){

    let [control,setControl] = useState({
        num:'1',
        step:1,
        time:1000,
        flag:false,
    })

    /* ref绑定control里的属性 */
    const controlStepRef = useRef(control.step)
    const timeRef = useRef(control.time)

    useEffect(() => {
        
        controlStepRef.current = Number(control.step)
    }, [control.step])

    useEffect(() => {
    
        timeRef.current = Number(control.time)
    }, [control.time])


    /* 计时器1 */
    let [clock1,setClock1] = useState({
        count: 0,
        isStart: false,
        time:1000,
        step:1
    })

    /* ref绑定clock1里的属性 */
    const time1Ref = useRef(clock1.time)
    const count1Ref = useRef(clock1.count)
    const step1Ref = useRef(clock1.step)

    useEffect(() => {

        count1Ref.current = Number(clock1.count)
    }, [clock1.count])

    useEffect(() => {
    
        step1Ref.current = Number(clock1.step)
    }, [clock1.step])

    useEffect(() => {
    
        time1Ref.current = Number(clock1.time)
    }, [clock1.time])

    useEffect(() => {

    let timer
    if(clock1.isStart ){
    
        timer = setInterval(()=>{
        console.log('in count',clock1.count)
        setClock1( {...clock1, count :count1Ref.current + step1Ref.current})
        },time1Ref.current)
    }
        return () => {
            console.log(' in return ')
            if(timer){
            clearInterval(timer)
            }
        }
    }, [clock1.isStart,control.flag])


    /* 计时器2 */
    let [clock2,setClock2] = useState({
        count: 0,
        isStart: false,
        time:1000,
        step:1
    })

    /* ref绑定clock2里的属性 */
    const time2Ref = useRef(clock2.time)
    const count2Ref = useRef(clock2.count)
    const step2Ref = useRef(clock2.step)

      useEffect(() => {
    
        count2Ref.current = Number(clock2.count)
      }, [clock2.count])

      useEffect(() => {
        
        step2Ref.current = Number(clock1.step)
      }, [clock2.step])

      useEffect(() => {
        
        time2Ref.current = Number(clock2.time)
      }, [clock2.time])

      useEffect(() => {
    
        let timer
        if(clock2.isStart ){
          
          timer = setInterval(()=>{
            console.log('in count',clock2.count)
            setClock2( {...clock2, count :count2Ref.current + step2Ref.current })
          },time2Ref.current)
        }
        return () => {
          console.log(' in return ')
          if(timer){
            clearInterval(timer)
          }
        }
      }, [clock2.isStart,control.flag])

    return  (
        <div >
            控制器：
            <div>

                <select value={control.num} onChange={

                    (e)=>{
                        setControl({
                            ...control,num:e.target.value
                        })
                    }
                }>
                    <option value="1">定时器1</option>  
                    <option value="2">定时器2</option>  
                </select>

                <div>
                    step:
                    <input type="text" value={ control.step || '' } onChange={ (e)=>{
                        setControl({
                            ...control,step:e.target.value
                        })
                    } }/>
                </div>
                
                <div>
                    time:
                    <input type="text" value={ control.time || '' } onChange={ (e)=>{

                        setControl({
                            ...control,time:e.target.value
                        })
                    } }/>
                </div>
                
                <div>
                    <button onClick={ ()=>{
                            if(control.num === '1'){
                                /* 点击后给传入修改后的conftrol的属性 */
                                step1Ref.current = controlStepRef.current
                                time1Ref.current = timeRef.current
                            }else{
                                step2Ref.current = controlStepRef.current
                                time2Ref.current = timeRef.current
                            }
                            setControl({
                                ...control,flag:!control.flag
                            })
                        
                        
                        console.log('num',control.num)
                        console.log(control.step)
                        console.log(control.time)
                        
                    }}>修改</button>  
                </div>
            </div>
            
            <div >
                          
                定时器1: {clock1.count}
                <div>
                    <button onClick={ ()=>{ setClock1 ({

                        ...clock1,isStart:!clock1.isStart
                    },)}}>
                    { clock1.isStart ? 'stop' : 'start'}
                    </button>  
                </div>
            </div>

            <div >
                          
                定时器2: {clock2.count}
                <div>
                    <button onClick={ ()=>{ setClock2 ({

                        ...clock2,isStart:!clock2.isStart
                    },)}}>
                    { clock2.isStart ? 'stop' : 'start'}
                    </button>  
                </div>
            </div>
        </div>
    )
}


export default Control;
