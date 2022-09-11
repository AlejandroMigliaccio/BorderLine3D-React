import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./style.scss"

const Swiper = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };



    return (
            <section className='swiper'>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/pln1.png"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/productos/notebook.png"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/productos/venus.png"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </section>
    );

}

export default Swiper;