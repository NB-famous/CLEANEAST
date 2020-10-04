import React from 'react';
import "../styles/Content.scss";
import Carousel from 'react-bootstrap/Carousel'


const CarouselSlide = () => {

  return (

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/800/400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>CarWash</h3>
          <p>Exterior wash -Rinse -Poly Shine - Underbody Sparay - Hand dry - Window cleaning - Interior vacuum - Mats cleaning</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/800/400?text=Second slide&bg=282c34"
          alt="Secondslide"
        />

        <Carousel.Caption>
          <h3>Home Cleaning</h3>
          <p>Brooming - Vacuuming - Mopping - Dusting - Floor Waxing - Window cleaning - Carpet cleaning</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/800/400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Land Scaping</h3>
          <p>Lawn Mowing - Watering - Gardening - Weeds Removal</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/800/400?text=Third slide&bg=20231a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Join now</h3>
          <p>Create your own profile and join our comunity. Get the right service for you! </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  )
}

export default CarouselSlide