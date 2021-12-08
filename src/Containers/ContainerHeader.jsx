import Header from "../Components/Header/Header";
import {connect} from "react-redux";
import {setUserCredentials} from "../Redux/authSlice";
import {getAuthApi} from "../API/samuraijsAPI";

let mapStateToProps = (state) => {
    return {
        userCredentials: state.AuthData.userCredentials
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        // TODO: Эту логику, конечно нельзя держать здесь, но я пока не в курсе куда её переносить
        //  а потому не буду создавать slice для Header'а
        getCredentials: () => {
            getAuthApi()
                .then(response => {
                        console.log("getCredentials", response);
                        if (response.resultCode === 0) {
                            dispatch(setUserCredentials(response.data))
                        }
                    }
                )
        }
    }
}

const ContainerHeader = connect(mapStateToProps, mapDispatchToProps)(Header)
export default ContainerHeader