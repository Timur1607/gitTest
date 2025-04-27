import s from './Recommendation.module.css'
import img from './Recommendation.png'
export default function Recommendation(){
    return(
        <>
            
            <div className={s.div}>
                <img className={s.img} src={img} alt="man picture" />
                <p className={s.div__p}>recommendations from buyers</p>
            </div>
        </>
    )
}