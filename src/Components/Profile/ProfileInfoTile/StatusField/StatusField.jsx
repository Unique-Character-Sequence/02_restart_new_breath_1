import c from './StatusField.module.css'
import React from "react";

const StatusField = (props) => {
    console.log(props.isUserStatusInEditMode)
    let newRef = React.createRef();
    const onBlurDo = () => {
        let status = newRef.current.value;
        props.switchUserStatusEditMode()
        props.updateStatus(status)
    }
    const caseUserStatusPromiseState = () => {
        console.log("props.userStatusPromiseState", props.userStatusPromiseState)
        switch (props.userStatusPromiseState) {
            //FIXME: Можно крутилку, галочку, крестик прикрутить
            case "pending":
                return "pending"
            // return <img src="#s" alt="#s"/>
            case "fulfilled":
                return "fulfilled"
            // return <img src="#s" alt="#s"/>
            case "rejected":
                return "rejected"
            // return <img src="#s" alt="#s"/>
        }
    }
    return <div className={c.main}>
        {
            props.isUserStatusInEditMode ?
                <div>
                    <textarea ref={newRef} autoFocus={true} onBlur={onBlurDo}>{props.status}</textarea>
                </div> :
                <div>
                    <span onClick={props.switchUserStatusEditMode}>
                        {props.status ? props.status : "Статус не указан"}
                    </span>
                </div>
        }
        <div>PromiseState: {caseUserStatusPromiseState()}</div>
    </div>
}

export default StatusField