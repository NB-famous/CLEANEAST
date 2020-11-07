import React from 'react';
import Carousel from 'react-bootstrap/Carousel'


const CarouselSlide = () => {

  return (

    // <Carousel style={{width: "80%", height: "50%", left: "10%", rigth: "10%"}}>
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block"
          src="https://myfirstuk.com/wp-content/uploads/2018/05/carcare_660X440.jpg"
          alt="First slide"
          style={{width: "45vw", height: "50vh"}}
        />
        <Carousel.Caption style={{backgroundColor: "grey", border:"solid black", borderRadius: "15px"}}>
          <h3>CarWash</h3>
          <p><strong>Exterior wash -Rinse -Poly Shine - Underbody Sparay - Hand dry - Window cleaning - Interior vacuum - Mats cleaning</strong></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://yegfitness.ca/wp-content/uploads/2020/05/Stock-WomanCleaningHouse-937992556-compressor.jpg"
          alt="Secondslide"
          style={{width: "45vw", height: "50vh"}}
        />

        <Carousel.Caption style={{backgroundColor: "grey", border:"solid black", borderRadius: "15px"}}>
          <h3>Home Cleaning</h3>
          <p><strong>Brooming - Vacuuming - Mopping - Dusting - Floor Waxing - Window cleaning - Carpet cleaning</strong></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://hubingers.com/wp-content/uploads/2017/04/61f8e048c21b9d2a1f73b01de9d7c930.jpg"
          alt="Third slide"
          style={{width: "45vw", height: "50vh"}}
        />

        <Carousel.Caption style={{backgroundColor: "grey", border:"solid black", borderRadius: "15px"}}>
          <h3>Land Scaping</h3>
          <p><strong>Lawn Mowing - Watering - Gardening - Weeds Removal</strong></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block"
          src="https://www.unitedway.org/i/blog/family_volunteering.jpg"    
          alt="Third slide"
          style={{width: "45vw", height: "50vh"}}
        />

        <Carousel.Caption style={{backgroundColor: "grey", border:"solid black", borderRadius: "15px"}}>
          <h3>Join now</h3>
          <p><strong>Create your own profile and join our comunity. Get the right service for you! </strong></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  )
}

export default CarouselSlide