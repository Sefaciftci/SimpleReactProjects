import React,{useState} from 'react';
import '../style/randomNum.css';

const RandomNumberReact = () => {

    const [minNum , setMinNum] = useState(0);
    const [maxNum, setMaxNum] = useState(10);
    const [randomNum, setRandomNum] = useState(5)

    const getRandomNum = () => {
        setRandomNum(Math.floor(Math.random()*(maxNum-minNum+1)+minNum));
    }

    return(
        <div className='container'>
            <h1>Random Number Application</h1>
            <div className='randomNumShowBox'>
                <h4>Random Number: <span>{randomNum}</span> </h4>
            </div>
            <div className='numberBox'>
                <div>
                    <p>Min:</p>
                    <input
                    type='number'
                    value={minNum}
                    onChange={e => (setMinNum(+e.target.value))}/>
                </div>
            </div>
            <div className='numberBox'>
                <div>
                    <p>Max:</p>
                    <input
                    type='number'
                    value={maxNum}
                    onChange={e=>(setMaxNum(+e.target.value))}/>
                </div>
            </div>
            <button className='randomBtn' onClick={getRandomNum} >Get Random Number</button>
        </div>
    )
}

export default RandomNumberReact;