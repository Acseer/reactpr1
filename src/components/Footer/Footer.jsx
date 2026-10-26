import s from './Footer.module.css'

import rutube from '../../assets/rutube.png'
import odn from '../../assets/odn.png'
import vk from '../../assets/vk.png'

export function Footer() {
    return (
        <footer>
            <div className="Container">
                <div className={s.infFoot}>
                    <div className={s.navFoot}>
                        <p className={s.glavFoot}>Навигация</p>
                        <a href="#" className={s.footBtn}>Главная</a>
                        <a href="assets/pages/katalog.html" className={s.footBtn}>Каталог</a>
                        <a href="assets/pages/about.html" className={s.footBtn}>О нас</a>
                    </div>

                    <a href="#" className={s.logoFoot}>
                                            КомфортДом
                                        </a>

                    <div className={s.contFoot}>
                        <p className={s.glavFoot}>Контакты</p>
                        <a href="tel:+79934196194" className={s.footBtn}>+7(993)419-61-94</a>
                        <a href="mailto:vremyavkusa@mail.ru" className={s.footBtn}>vremyavkusa@mail.ru</a>
                        <div className={s.mesFoot}>
                            <a href="#" className={s.mesFootBtn}><img src={rutube} alt="" /></a>
                            <a href="#" className={s.mesFootBtn}><img src={odn} alt="" /></a>
                            <a href="#" className={s.mesFootBtn}><img src={vk} alt="" /></a>
                        </div>
                    </div>
                </div>

                <p className={s.copy}>© Грязнов Владислав Евгеньевич</p>
            </div>
        </footer>
    )
}