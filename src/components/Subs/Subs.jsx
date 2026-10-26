import s from './Subs.module.css'

export function Subs() {

    return (
        <div className="Container">
            <section className={s.subscribe}>

                <h3 className={s.subscribeH1}>Будь в курсе</h3>
                <div className={s.subscribeText}>

                    <p>Оставь свою почту для связи чтобы быть всегда в курсе всех акций и скидок.</p>


                    <form className={s.subscribeForm}>
                        <input
                            type="email"
                            className={s.subscribeInput}
                            placeholder="example@gmail.com"
                            required
                        />
                        <button type="submit" className={s.subscribeBtn}>
                            Отправить
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}