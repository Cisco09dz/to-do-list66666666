import { useState } from "react"
import "./todo.css"

useState
const Todo=()=>{
    const [inputn, setinputn]=useState('')

    const [tesks , settesks]=useState([...''])
    
    const FB=(event)=>{
    event.preventDefault();
    settesks(currentesks=>[...currentesks,inputn]); 
    setinputn('');

    }

    const handelDelete =(deletetesk)=>{
        const newtask=tesks.filter((tesk)=>tesk!==deletetesk);
        settesks(newtask);
     }

    
    return (
       <div className="todo" >
        <h3>TASK NAME </h3>
        <input className="taskn" type="text" placeholder="task name" value={inputn} onChange={(e)=>setinputn(e.target.value)}></input>
       
        <button onClick={FB} className="colorButton" type="submmite">submmite</button>
        <div>{inputn}</div>
<br></br>

<ul >
    {tesks.map((tesk,index)=><li className="ulclass" key={index}>{tesk}<button 

 className="libcolor" onClick={()=>handelDelete(tesk)}>delet</button><button className="libcolorTOW">edit</button></li>)}
</ul>



        </div>
       

       
    
       
    )
}
export default  Todo