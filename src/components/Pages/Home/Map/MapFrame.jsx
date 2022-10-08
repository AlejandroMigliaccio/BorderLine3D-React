import "./style.scss";

const MapFrame = () => {
    return (
        <section className="main__container__map">
            <h3 className="main__container__map__title">Aqui estamos</h3>
            <div className="main__container__map__location">
                <iframe className="main__container__map__location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26209.90106208754!2d-58.453080099999994!3d-34.7999629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd3d25e396e7d%3A0xeb8be1a1f99a3bfb!2sLuis%20Guillon%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1657724489909!5m2!1ses-419!2sar"
                    width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}

export default MapFrame;