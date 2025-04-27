import s from './Footer.module.css'

export default function Footer(){
    return(
        <footer className={s.footer}>
            <h2 className={s.footer__h2}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <form className={s.footer__form}>
                <input className={s.footer__form_input} />
                <input className={s.footer__form_button} type="submit" />
            </form>
        </footer>
    )
}