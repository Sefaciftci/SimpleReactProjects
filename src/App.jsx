import React,{useState,useEffect} from 'react'
import './style/app.css';
import './style/loading.css';
import PacmanLoader from "react-spinners/PacmanLoader";
import RandomNumberReact from './Componenets/RandomNumber'
import ImgGallery from './Componenets/ImgGallery';
import TodoListApp from './Componenets/TodoListApp';
import RandomImgApp from './Componenets/RandomImgApp';
import CardApp from './Componenets/CardApp';
import SearchFilterApp from './Componenets/SearchFilterApp';
import RandomColor from './Componenets/randomColor';
import PaginationApp from './Componenets/PaginationApp';
import TimeApp from './Componenets/TimeApp';

function App() {

  //spinner

  const [loading,setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
    
  },[])

  return (
    <>
    
    {
      loading ? 
      <div className='loadingPage'>
        <PacmanLoader color="#36d7b7" size={50}/>
      </div>
      : 
      <div className='container'>
        <h1>---- Simple React Projects ----</h1>

        <div className='randomNumApp'>
          <RandomNumberReact/>
        </div>

        <div className='ImgGallery'>
          <ImgGallery/>
        </div>

        <div className='todoListApp'>
          <TodoListApp/>
        </div>

        <div className='randomImgApp'>
          <RandomImgApp/>
        </div>

        <div className='cardApp'>
          <CardApp/>
        </div>

        <div className='searchFilterApp'>
          <SearchFilterApp/>
        </div>

        <div className='randomColor'>
          <RandomColor/>
        </div>

        <div className='paginationApp'>
          <PaginationApp/>
        </div>
        <div className='timeApp'>
          <TimeApp/>
        </div> 
      </div>
      
    }

</>   
    
  )
}

export default App
