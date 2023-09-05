import React,{useState} from "react";
import '../style/randomColor.css';
const RandomColor =() => {

    const [hex , setHex] = useState("#ffffff");
    const randomHex = () => {
        const random = "#" + Math.floor(Math.random()* 16777721).toString(16);
        setHex(random);
    }
    
    return(
        <div className="container" >
            <h1>Rnadom Color App</h1>
            <div className="changeDiv" style={{backgroundColor:`${hex}`}}> 
                <div className="colorChangeBox" >
                    <h1>{hex}</h1>
                    <button className="colorChangeBtn" onClick={randomHex}>Change Background</button>
                    <button  className="colorChangeBtn" onClick={()=>navigator.clipboard.writeText(hex)}>Copy the Hex</button>
                </div>       
                
            </div>
        </div>
    )

}

export default RandomColor;