import s from './Card.module.css'

function Card(props) {

    return (
        <>
            <article className={s.card}>
                <img className={s.card__img} src="https://i.pinimg.com/736x/36/09/7a/36097a9145ab44dea56981296e6d173a.jpg" alt="" />
                <p className={s.card__title}>Name: {props.title}</p>
                <p className={s.card__amount}>Price: R${props.amount}</p>
            </article>
        </>
    )
}

export default Card
