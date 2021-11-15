import logo from './logo.svg'
import './App.css'
import cutepfp from './cutepfp.jpg'
import clouds from './clouds.png'
// import Header from "./Components/Header/Header"
// import Posts from "./Other/Posts"
// import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
    return (
        <div className="app-wrapper">
            {/*<Header className="Header"/>*/}
            {/*<Sidebar className='Sidebar'/>*/}
            {/*<Posts className='Content'/>*/}
            <div className="Header">
                <img className="App-logo" src={logo} alt=""/>
                Хихихаха
            </div>
            <nav className='Sidebar'>
                <div><a href="#s">Profile</a></div>
                <div><a href="#s">Messages</a></div>
                <div><a href="#s">Settings</a></div>
            </nav>

            <div className='Content'>
                <div>
                    <img className="banner" src={clouds} alt=""/>
                </div>
                <div>
                    <img className="pfp" src={cutepfp} alt=""/>
                    Pfp + description
                </div>
                <div>
                    Мои посты
                    <div>Пост1
                        <ul>
                            <li>Итак, братан</li>
                            <li>Поздравляю тебя с новым началом</li>
                            <li>Ты быстренько восстановишься, да!</li>
                            <li>А потом и прогресс продолжишь</li>
                            <li>После этого и деньжат заработаешь</li>
                            <li>Боже! ;') я даже завидую тебе...</li>
                        </ul>
                    </div>
                    <div>
                        Пост 2 <br/>
                        ну привет, бибробобус
                    </div>
                </div>

            </div>
        </div>
    )
}

export default App
