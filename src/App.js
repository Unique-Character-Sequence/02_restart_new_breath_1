import './App.css'
import Header from "./Components/Header/Header"
import Sidebar from "./Components/Sidebar/Sidebar";
import Profile from "./Components/Profile/Profile";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Sidebar/>
            <Profile/>
        </div>
    )
}

export default App
