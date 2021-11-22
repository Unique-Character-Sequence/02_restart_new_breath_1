import './App.css'
import Header from "./Components/Header/Header"
import Sidebar from "./Components/Sidebar/Sidebar";
import Profile from "./Components/Profile/Profile";
import Messages from "./Components/Messages/Messages";
import Settings from "./Components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {Routes} from "react-router";
import Photos from "./Components/Photos/Photos";
import Communities from "./Components/Communities/Communities";

const App = (props) => {
    return (<div className="app-wrapper">
                <Header/>
                <Sidebar SidebarDatasets={props.state.SidebarDatasets}/>
                <div className="main-content-area">
                    <Routes>
                        <Route path='/profile'
                               element={<Profile
                                   rawPostDatasets={props.state.ProfilePageDatasets.rawPostDatasets}/>}/>
                        <Route path='/messages'
                               element={<Messages
                                   MessagesPageDatasets={props.state.MessagesPageDatasets}/>}/>
                        <Route path='/communities' element={<Communities/>}/>
                        <Route path='/photos' element={<Photos/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
    )
}

export default App
