import { useState,useRef, createContext, useContext, useEffect,memo } from "react";
import './index.scss'
import { useSelector,useDispatch } from "react-redux";

import { inscrement,descrement,addToNum} from "./store/modules/counterStore";
import { Outlet, useNavigate } from "react-router-dom";

import StateClass from "./pages/classComponent";
const MsgContent = createContext()

function ArrayButton(props) {
  const [arr] = useState([1, 2, 3])
  console.log(props,'重新渲染props')
  const {cb:getMsg} = props
  return (
    <div>
      <CtxComponent></CtxComponent>
      {arr.map(item => <li key={item}>{item}</li>)}
      <button onClick={()=>getMsg('son msg')}>平方</button>
    </div>
  )
}

const NewArrayButton = memo(ArrayButton)

function MsgList(props) {
  const [list, setList] = useState([
    { id: 1001, msg: 'vue' },
    { id: 1002, msg: 'react' }
  ])
  const [value,setValue] = useState('')
  const refInput = useRef(null)
  function deleteList(target){
      let curArr = []
      curArr = list.filter(item => item.id !== target.id)
      setList(curArr)
  }
  return (
    <div className="msg-list">
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} ref={refInput}></input>
      <div>{props.name}</div>
 
      {
        list.map(item =>
         <div key={item.id}>
           <span className="list-msg">{item.msg}</span>
           <button onClick={()=>deleteList(item)}>删除</button>
        </div>)
      }
    </div>
  )
}


function CtxComponent(){
 const msg = useContext(MsgContent)
  return (
    <div className="ctx">
      this is third,{msg}
    </div>
  )
}
function App() {
  const [name,setName] = useState('this is app name') 
  const getMsg = function(msg){
    setName(msg)
  }
  useEffect(()=>{
    console.log('副作用函数执行')
  })
  useEffect(()=>{
    console.log('只是执行一次')
  },[name ])
  const msg = 'this is msg'

  // 使用redux
  const {count} = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div className="App">
      <MsgContent.Provider value={msg}>
        <NewArrayButton name={msg} cb={getMsg} />
      </MsgContent.Provider>
      <span>{name}</span>
      <MsgList name={name}></MsgList>

      <button onClick={()=>dispatch(inscrement())}>+1</button>
      <button onClick={()=>dispatch(descrement())}>-1</button>
      <button onClick={()=>navigate('/article')}>to100</button>
      <button onClick={()=>navigate('/content')}>二级路由跳转</button>

      <Outlet></Outlet>
      {count}
      <StateClass msg='信息msg'></StateClass>
    </div>
  );
}

export default App;
