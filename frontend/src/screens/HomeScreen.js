import React from 'react'
import {Carousel} from 'react-bootstrap'

const HomeScreen = () => {
    return (
        <div className="jumbotron px-5">
            <Carousel className="mx-5"> 
                <Carousel.Item interval={4000}>
                    <img
                    className="d-block w-100"
                    src="/images/home1.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5 style={{color: "white"}}>Santa Barbara, CA, USA</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100"
                    src="/images/home2.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5 style={{color: "white"}}>Santa Barbara, CA, USA</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100"
                    src="/images/home3.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5 style={{color: "white"}}>Los Angeles, CA, USA</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HomeScreen




