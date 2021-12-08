import './App.css'
import Sidebar from "./Components/Sidebar/Sidebar";
import Messages from "./Components/Messages/Messages";
import Settings from "./Components/Settings/Settings";
import {Route} from "react-router-dom";
import {Routes} from "react-router";
import Photos from "./Components/Photos/Photos";
import Communities from "./Components/Communities/Communities";
import ContainerFriends from "./Containers/ContainerFriends";
import ContainerProfile from "./Containers/ContainerProfile";
import ContainerHeader from "./Containers/ContainerHeader";
import Login from "./Components/Login/Login";

const App = (props) => {
    return (<div className="app-wrapper">
            <ContainerHeader/>
            <Sidebar SidebarDatasets={props.state.SidebarDatasets}/>
            <div className="main-content-area">
                <Routes>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/profile/:id' element={<ContainerProfile/>}/>
                    {/*{<Route path='/profile' element={<ContainerProfile/>}/>}*/}

                    {/*FIXME: Надо настроить так, чтобы id брался из authData, а если нету, то id='5'*/}
                    {/*FIXME: Либо дальше зайти и не показывать вообще то, что неавторизованному не доступно*/}

                    <Route path='/messages' element={<Messages
                        rawUserTileDatasets={props.state.MessagesPageDatasets.rawUserTileDatasets}/>}/>
                    <Route path='/communities' element={<Communities
                        CommunitiesPageDatasets={props.state.CommunitiesPageDatasets}/>}/>
                    <Route path='/photos' element={<Photos/>}/>
                    <Route path='/friends' element={<ContainerFriends/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App
