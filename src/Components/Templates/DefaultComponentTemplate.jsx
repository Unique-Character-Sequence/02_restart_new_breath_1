// Use 'Ctrl+E' to replace all 'Template' with the name you need
// delete the Dummy import
import Dummy from "../dummy/dummy";
import c from './Template.module.css'

const Template = () => {
    return <div className={c.main}>
        <Dummy text="Template>"/>
    </div>
}

export default Template