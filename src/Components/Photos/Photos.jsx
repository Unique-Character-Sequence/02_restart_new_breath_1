// Use 'Ctrl+E' to replace all 'Photos' with the name you need
// delete the Dummy import
import c from './Photos.module.css'
import Dummy from "../dummy/dummy";

const Photos = () => {
    return <div className={c.main}>
        <Dummy text="Photos"/>
    </div>
}

export default Photos