import React,{useState} from "react";
import Data from '../Data/searchFilterData.json';
import '../style/searchFilterApp.css';

const SearchFilterApp = () => {
    const [searchTerm, setSerachTerm] = useState("");   
    console.log(searchTerm)

    return<div className="container">
        <h1>Search Filter App</h1>
        <div className="searchDiv">
            <input
            type="text"
            placeholder="Search a name.."
            value={searchTerm}
            onChange={(e)=>setSerachTerm(e.target.value)}
            />
        </div>
        <div className="filterDiv">
            {Data.filter((val)=>{ 
            if(searchTerm==""){
                return val;
            }else if(val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                return val;
            }
        }).map((val)=> {
            return <div className="filterCard" key={val.id}>
                <img src={val.img}/>
                <h4>{val.title}</h4>
            </div>
        })
        }
        </div>

    </div>
}
export default SearchFilterApp;