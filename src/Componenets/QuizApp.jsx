import React,{useState} from "react";
import '../style/quizApp.css';
// import Questions from '../Data/quizAppData.json';
const questions = [
    {
        text:"1- Buraya soru gelicek ",
        option : [
            {id:0, text:"Doğru", isCorrect:false},
            {id:1, text:"Yanlış", isCorrect: true}
        ]
    },
    {
        text:"1- Buraya soru gelicek ",
        option : [
            {id:0, text:"Doğru", isCorrect:false},
            {id:1, text:"Yanlış", isCorrect: true}
        ]
    },
    {
        text:"1- Buraya soru gelicek ",
        option : [
            {id:0, text:"Doğru", isCorrect:false},
            {id:1, text:"Yanlış", isCorrect: true}
        ]
    }
]


const QuizApp = () => {
    const [finalResault, setFinalResault] = useState(false)
    const [score,setScore] = useState(0);
    const {currentQuestion, setCurrentQuestin} = useState(1);
    return(
        <div className="container">
            <h1>Question App</h1>

            {finalResault ? 
            <div className="resultCard">
            <h2>Tebrikler quizi {score} doğru cevap ile tamaladınız.</h2>
            <button>Tekrar Çöz</button>
        </div>
            
            :
            <div className="questionCard">
                 <h2>Şuanki Skorunuz: {score}</h2>
                 <h2>{questions.length}. sorudan {currentQuestion}. sorudasınız.</h2>
                 <h4>Soru gelecek</h4>
                 <ul>    
                    {questions[currentQuestion].option.map((option)=>{
                        return <li>{option.text}</li>
                    })}
                 </ul>
            </div>
            }
        </div>
    )
}

export default QuizApp;