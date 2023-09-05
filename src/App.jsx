import React from 'react'
import './style/app.css';
import RandomNumberReact from './Componenets/RandomNumber'
import ImgGallery from './Componenets/ImgGallery';
import TodoListApp from './Componenets/TodoListApp';
import RandomImgApp from './Componenets/RandomImgApp';
import CardApp from './Componenets/CardApp';
import SearchFilterApp from './Componenets/SearchFilterApp';
import QuizApp from './Componenets/QuizApp';
import RandomColor from './Componenets/randomColor';

function App() {
  return (
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
      
    </div>
  )
}

export default App
