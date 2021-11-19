import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let rawMsgContentDatasets = [
    {text: 'Сообщенивание 1'},
    {text: 'Сообщенивание 2'},
    {text: 'Сообщенивание 3'},
    {text: 'Сообщенивание 4'},
]

let rawPostDatasets = [
    {post_id: '1', author: 'Абобус Алексеич', likes_amount: '99', text: 'Флексанул конкретно'},
    {post_id: '2', author: 'Бибибус Чечевичкин', likes_amount: '299', text: 'Очень конкретно'},
    {post_id: '3', author: 'Бибибус Кукурача', likes_amount: '19', text: 'Жёстким флексом'},
]

let rawUserTileDatasets = [
    {id: 1, name: 'Бибус Челикович'},
    {id: 2, name: 'Абобус Беброчевских'},
    {id: 3, name: 'Бибабоба Кринжов'},
    {id: 4, name: 'Бублик Бибубликовый'},
]

ReactDOM.render(
    <React.StrictMode>
        <App
            rawUserTileDatasets={rawUserTileDatasets}
            rawMsgContentDatasets={rawMsgContentDatasets}
            rawPostDatasets={rawPostDatasets}
        />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
