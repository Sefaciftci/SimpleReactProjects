import React , { useState, useEffect } from "react";
import '../style/randomImgApp.css';

const RandomImgApp = () => {

    const [images,setImages] = useState([]);

    const getImg = () => {
        fetch("https://picsum.photos/v2/list")
        .then((res)=>res.json())
        .then((data)=>{
            //random gelmesi çin 
            let randomNum = Math.floor(Math.random()*data.length);
            setImages(data[randomNum])
        })
    }
    //sayfa ilk çalıştığı anda resim gelsin 
    useEffect(()=> {
        getImg();
    },[])
    return <div className="container">
        <h1>Random Images App</h1>
        <div>
            <img className="randomImg" src={images.download_url}/>
        </div>
        <div>
            <button className="changeBtn" onClick={getImg}>Change</button>
        </div>
    </div>
}

export default RandomImgApp;