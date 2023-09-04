import React,{useState} from "react";
import '../style/todoListApp.css';

function TodoListApp() {

    // oluşturlan itemlerı tutucaz
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]); 

    

    //add butonun aktif edecez
    const addItem = () => {
        const item = {
            id:Math.floor(Math.random()*1000),
            value:newItem
        }
        setItems(oldItems =>[...oldItems , item])
        setNewItem('');
    }

    //item silme 
    const deleteItem = (id) => {
        const newArray = items.filter((item)=> item.id !== id);
        setItems(newArray);
    }

    return(
        <div className="container">
            <h1>Todo List App</h1>
            <div className="inputDiv">
                <input
                type="text" 
                placeholder="Add mission"
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
                />
                <button onClick={()=> addItem()} >Add</button>
            </div>
            <div className="itemDiv">
                <ul className="itemsLu">
                    {items.map((item)=>{
                        return <li className="itemsLi" key={item.id}>{item.value} <button className="itemDeleteBtn" onClick={()=> deleteItem(item.id)}>X</button> </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default TodoListApp;