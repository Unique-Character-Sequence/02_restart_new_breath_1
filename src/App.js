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
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>
                <div className="main-content-area">
                    <Routes>
                        <Route path='/profile'
                               element={<Profile rawPostDatasets={props.appState.ProfilePageDatasets.rawPostDatasets}/>}/>
                        <Route path='/messages'
                               element={<Messages
                                   rawMsgContentDatasets={props.appState.MessagesPageDatasets.rawMsgContentDatasets}
                                   rawUserTileDatasets={props.appState.MessagesPageDatasets.rawUserTileDatasets}/>}/>
                        <Route path='/communities' element={<Communities/>}/>
                        <Route path='/photos' element={<Photos/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
