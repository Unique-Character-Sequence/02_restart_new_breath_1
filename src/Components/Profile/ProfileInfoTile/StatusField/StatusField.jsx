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
                </div>}
        {
            props.isUserStatusPending ?
                <div>
                    <img src="#" alt=""/>
                </div> :
                <div>
                    <img src="#" alt=""/>
                </div>
        }
    </div>
}

export default StatusField