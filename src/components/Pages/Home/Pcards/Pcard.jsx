
import "./style.scss";
const Pcards = () => {
    return (
        <>
            <h2 className="cards__title">Nuestros productos</h2>
            <div className="cards__box">
                <article className="cards__box__card">
                    <div className="cards__box__cardbody">
                        <img src="/images/productos/notebook.png" alt="oficina" />
                        <p>Oficina</p>
                    </div>
                </article>
                <article className="cards__box__card">
                    <div className="cards__box__cardbody">
                        <img src="/images/productos/km1.png" alt="decoracion" />
                        <p>Decoracion</p>
                    </div>
                </article>
                <article className="cards__box__card">
                    <div className="cards__box__cardbody">
                        <img src="/images/productos/pika.png" alt="juguetes" />
                        <p>Juguetes</p>
                    </div>
                </article>
            </div>
        </>
    );
}

export default Pcards;