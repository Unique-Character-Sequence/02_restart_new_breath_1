import './App.css'
import Header from "./Components/Header/Header"
import Sidebar from "./Components/Sidebar/Sidebar";
import Profile from "./Components/Profile/Profile";
import Messages from "./Components/Messages/Messages";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Sidebar/>
            <div className="main-content-area">
                <Route/>
                <Messages/>
                {/*<Profile/>*/}
            </div>
        </div>
    )
}

export default App
