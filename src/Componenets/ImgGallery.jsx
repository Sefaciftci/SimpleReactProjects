import React,{useState} from "react";
import '../style/imgGallery.css';
import london from '../Images/london.jpg';
import capetown from '../Images/capetown.jpg';
import istanbul from '../Images/istanbul.jpg'
import newyork from '../Images/newyork.jpg'
import tokyo from '../Images/tokyo.jpg';

const images = [
    london,
    capetown,
    istanbul,   
    newyork,
    tokyo
]


const ImgGallery = () => {

    const [selectedImg, setSelectedImg] = useState(images[0])
    return(
    <div className="container">
        <h1>Image Gallery App</h1>
        <img className="selectedImg" src={selectedImg}></img>
        <div className="imgBox">
            {images.map((image,index)=> {
                return <img className="imagesStyle" key={index} src={image}
                onClick={()=>setSelectedImg(image)}
                />
            })}
        </div>
    </div>
    ) 
}

export default ImgGallery;