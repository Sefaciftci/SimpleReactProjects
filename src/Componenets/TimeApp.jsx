import React,{useState} from "react";
import '../style/timeApp.css';

const TimeApp = () => {
    //Zamanı durdurup tekrar çalıştırmayı sağlayan bir fonksiyon 

    const [localTime, setLocalTime] = useState('');
    const updateTime = () => {
        let time  = new Date().toLocaleTimeString();
        setLocalTime(time);
    }
    setInterval(updateTime,1000);

    return(
        <div className="container">
            <h1>Time App</h1>
            <h3 className="localTime">{localTime}</h3>            
        </div>
    )
}
export default TimeApp;