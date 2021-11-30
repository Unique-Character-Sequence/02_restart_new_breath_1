import PreloaderGif from './Preloader.gif'
import c from './Preloader.module.css'

const Preloader = () => {
    return <div className={c.main}>
        <img className={c.center} src={PreloaderGif} alt=""/>
    </div>
}

export default Preloader