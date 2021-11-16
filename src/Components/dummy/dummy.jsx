import working_on_it from './working_on_it.gif'
import c from './dummy.module.css'

const Dummy = (props) => {
    return <div className={c.main}>
        <div><h2>{props.text}</h2></div>
        <img alt='' src={working_on_it}/>
    </div>
}

export default Dummy;