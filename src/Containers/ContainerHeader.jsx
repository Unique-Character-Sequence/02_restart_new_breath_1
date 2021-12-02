import Header from "../Components/Header/Header";
import {connect} from "react-redux";
import {get} from "axios";
import {setUserCredentials} from "../Redux/authSlice";

let mapStateToProps = (state) => {
    return {
        userCredentials: state.AuthData.userCredentials
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getCredentials: () => {
            get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
                .then(response => {
                        console.log("getCredentials", response.data);
                        if (response.data.resultCode === 0) {
                            dispatch(setUserCredentials(response.data.data))
                            console.log("getCredentials.data.data", response.data.data);
                        }

                    }
                )
        }
    }
}

const ContainerHeader = connect(mapStateToProps, mapDispatchToProps)(Header)
export default ContainerHeader