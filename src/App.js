import logo from './logo.svg';
import './App.css';
import React from "react";

const App = () => {
    return (
        <div className="App">
            <Header/>
            А шо за текст тут у нас, гиги-гага
            <ListOfThoughts/>
            <img className="App-logo" src={logo} alt=""/>
        </div>
    )
}

let ListOfThoughts = () => {
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

let Header = () => {
    return (
        <div>
            <a href="#s">rofl1</a>
            <a href="#s">rofl2</a>
            <a href="#s">rofl3</a>
        </div>
    )
}

export default App;
