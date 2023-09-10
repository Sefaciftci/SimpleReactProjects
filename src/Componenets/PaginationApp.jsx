import React,{useEffect, useState} from "react";
import '../style/paginationApp.css';
import axios from "axios";

const PaginationApp = () => {

    const [imgData,setImgData] = useState([]);
    const [visiable,setVisiable] = useState(3);

    
    const showMoreUser = () => {
        setVisiable(user => user += 2)
    }

    const fetcData = async() => {
        try{
            const response = await axios.get("https://randomuser.me/api");
            setImgData(response.data.results[0].picture.large);
        }
        catch(error){
            console.log("Error");
        }
    }
    
    
    const usersData = [
        {
            name:"Name 1",
            description:"Lorem picsum lorem"
        },
        ,{
            name:"Name 2",
            description:"Lorem picsum lorem"
        },
        {
            name:"Name 3",
            description:"Lorem picsum lorem"
        },
        {
            name:"Name 4",
            description:"Lorem picsum lorem"
        },
        {
            name:"Name 5",
            description:"Lorem picsum lorem"
        },
        {
            name:"Name 5",
            description:"Lorem picsum lorem"
        },
        {
            name:"Name 6",
            description:"Lorem picsum lorem"
        },
        {
            name:"Name 7",
            description:"Lorem picsum lorem"
        }

    ]

    return(
        <div className="container">
            <h1>Pagination App</h1>
           <div className="usersContainer"> 
            {usersData.slice(0,visiable).map((user,index)=>{
                return  <div className="usersDiv" key={index}>
                    <img src={imgData}/>
                    <h4>{user.name}</h4>
                    <p>{user.description}</p>
                </div>
            })}
            </div>
            
            <button className="userBtn" onClick={fetcData}>Get Image</button>
            <button className="userBtn" onClick={showMoreUser}> Show More User</button>

        </div>
    )
}

export default PaginationApp;