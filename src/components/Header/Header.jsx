import s from './Header.module.css'

export function Header() {
    return (
        <header className={s.siteHeader}>
            <div className="Container">
                <div className={s.headerContainer}>
                    <a href="#" className={s.headerLogo}>
                        КомфортДом
                    </a>
                    <nav className={s.headerNav}>
                        <a href="#">Главная</a>
                        <a href="#">Каталог</a>
                        <a href="#">Корзина</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}