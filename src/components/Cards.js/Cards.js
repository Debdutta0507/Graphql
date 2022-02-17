import { Carousel } from 'react-bootstrap'
import React from 'react'

function Cards() {
    return (
        <Carousel>
            <Carousel.Item interval={1500}>
                <img
                    className="d-block w-100"
                    src="../assets/falcon9.jpg"
                    alt="Image One"
                />

            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src="../assets/falconheavy.jpg"
                    alt="Image Two"
                />

            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src="../assets/starship.jpg"
                    alt="Image Two"
                />

            </Carousel.Item>
        </Carousel>

    )
}

export default Cards