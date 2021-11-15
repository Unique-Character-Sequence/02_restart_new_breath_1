import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./Components/Header/Header";


const App = () => {
    return (
        <div className="App">
            <Header/>
            А шо за текст тут у нас, гиги-гага
            <ListOfThoughtsComponent/>
            <img className="App-logo" src={logo} alt=""/>
        </div>
    )
}

let ListOfThoughtsComponent = () => {
    return <div> {/* Видал прикол, можно и в скобочки не брать в такой ситуации*/}
        <ul>
            <li>Итак, братан</li>
            <li>Поздравляю тебя с новым началом</li>
            <li>Ты быстренько восстановишься, да!</li>
            <li>А потом и прогресс продолжишь</li>
            <li>После этого и деньжат заработаешь</li>
            <li>Боже! ;') я даже завидую тебе...</li>
        </ul>
    </div>

}

export default App;
