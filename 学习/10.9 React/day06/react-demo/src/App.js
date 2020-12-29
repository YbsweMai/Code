import React,{ useState, useEffect,useRef } from 'react';
import './App.css';

function App() {

  let [value,setValue] = useState('init-value')

  let [clock,setClock] = useState({
    id:1,
    time:1000
  })

  let [count,setCount] = useState(0)

  // 相当于componentDidMount和componentDidUpdate这两个生命周期
  useEffect(()=>{
    console.log('count useEffect')
    document.title = `You click ${count} times` // 改变标题为count值 称为副作用
  },[count])  // 只要页面任何一个元素重新渲染都会引发副作用，解决方案后面监听所引发的副作用值[count]，其他元素渲染就不会引发此副作用

  useEffect(() => {
    console.log('clock.id useEffect')
  }, [clock.id])

  // useEffect(() => {
  //   console.log('in useEffect')
  //   let timer = setInterval(() => {
  //     console.log('time')
  //   }, 1000);
  //   return () => {
  //     console.log('in return')
  //     if(timer){
  //       clearInterval(timer)
  //     }
  //   }
  // },[count]) // 只监听count才会进入return

  /* count自增 */
  let [isStar,setIsStar] = useState(false)
  let [step,setStep] = useState(1)
  const countRef = useRef(count)
  const stepRef = useRef(step)

  /* 找个中介 更新每次属性值*/
  useEffect(() => {
    
    countRef.current = count
  }, [count])

  useEffect(() => {
    
    stepRef.current = step
  }, [step])
  
  /* eslint-disable */
  useEffect(() => {
    
    let timer
    if(isStar){
      timer = setInterval(()=>{
        console.log('in count',count)
        setCount(countRef.current + stepRef.current)
      },1000)
    }
    return () => {
      console.log(' in return ')
      if(timer){
        clearInterval(timer)
      }
    }
  }, [isStar])

  return (
    <div className='App'>
      
      { value } <br/>
      id:{ clock.id } <br/>
      time:{ clock.time } <br/>
      count:{ count } <br />
      step:{ step }
      <div>
        <button onClick={()=>{
          
          setValue('after-value')
          // setValue(()=>{ console.log('value',value)})
          // setClock({...clock,time:2000}) // 需要写成解构的方式 否则未重新赋值的属性无法取到
          setCount((count)=>{ // 括号里的参数是只能拿到setCount里的属性值
            return count+1
          })
          
        }}>  click </button> <br />

        <button onClick={()=>{
          setClock({...clock,id:clock.id+1}) // 改变对象属性里的值
        }}> change id </button> <br />

        <button onClick={()=>{
          setIsStar(!isStar)
        }}>count自增</button> <br />

        <button onClick={()=>{
          setStep(step=step+2)
        }}>step</button>
      </div>
    </div>
  );
}

export default App;
