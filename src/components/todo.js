import react, { useState } from "react"
function TodoList(){
    const [state, setState] = useState("")
    const [newList, setList] = useState([])

    let Event = (event)=>{
        console.log(event.target.value)
        setState(event.target.value)
    }
    //Add item to the list
    let AddItem = (event)=>{
        console.log(state);
        newList.push(state);
        console.log(newList);
        event.preventDefault();
        setState("")
    }
    //Delete item from the list
    let DeleteItem = (index)=>{
        let indexOfItem = index
        newList.splice(indexOfItem,1)
        setList([...newList])
    }

    return <div className="test">
        <h1>TODO List</h1>
        <input type="text" value={state} onChange={(event)=>{Event(event)}} />
        <br/>
        <br/>
         <button onClick={AddItem}>Add Item</button>
        <div >
           {newList.map((value,index)=>{
            return <li  key={value+index}>{value} 
            <button onClick={()=>{DeleteItem(index)}}>Delete</button>
            </li>
            }
        )}
        </div>
    </div>
}

export default TodoList