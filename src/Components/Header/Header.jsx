import s from './Header.module.css'

function Header() {

    return (
        <>
            <header>
                <p className={s.header__p}>Leaves-shop</p>
                <ul className={s.header__ul}>
                    <li className={s.header__li}>
                        <a className={s.header__link} href="">Info</a>
                    </li>
                    <li className={s.header__ul}>
                        <a className={s.header__link} href="">Works</a>
                    </li>
                    <li className={s.header__ul}>
                        <a className={s.header__link} href="">Media</a>
                    </li>
                    <li className={s.header__ul}>
                        <a className={s.header__link} href="">Contacts</a>
                    </li>
                </ul>
            </header>
        </>
    )
}

export default Header
