import React,{useState} from 'react';
import data from '../Data/cardAppData.js';
import '../style/cardApp.css';
const CardApp = () => {

    const [cards,setCards] = useState(data);
    const deleteCard = (id)=> {
        const newArr = cards.filter((card) => card.id !== id);
        setCards(newArr);
        }
   
    return( 
    <div className='container'> 
        <h1>Card App</h1>
        <div className='card'>
            {cards.map((card)=> {
                return(
                    <div className='cardBody' key={card.id}>
                        <img src={card.img}/>
                        <h3>{card.name}</h3>
                        <p>{card.description}</p>
                        <button onClick={()=> deleteCard(card.id)}>Delete</button>
                    </div>                    
                )})}
        </div>
    </div>
    )}
export default CardApp;
