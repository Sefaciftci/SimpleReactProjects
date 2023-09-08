import React,{useState} from "react";
import '../style/paginationApp.css';
import axios from "axios";

const PaginationApp = () => {

    const [data,setData] = useState([]);

    const imgData = async() => {
        try{
            const response = await axios.get("https://randomuser.me/api");
            setData(response.data.results[0].picture.large);
        }
        catch(error){
            console.log("Error");
        }
    }
    
    console.log(data)

    return(
        <div className="container">
            <button onClick={imgData}>Check Data</button>
        </div>
    )
}

export default PaginationApp;