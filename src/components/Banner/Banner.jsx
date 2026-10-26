import s from './Banner.module.css'

import bannerBg from '../../assets/banner.png'

export function Banner() {
    return (
        <section className={s.hero} style={{ backgroundImage: `url(${bannerBg})`, background: 'center cover/ no-repeat' }}>
            <div className={s.content}>
                <h1 className={s.title}>Мебель, которая делает дом уютнее</h1>
                <a href="#contact" className={s.cta}>
                    Перейти в каталог
                </a>
            </div>
        </section>
    );
}