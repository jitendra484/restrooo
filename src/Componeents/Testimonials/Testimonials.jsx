import React from 'react'
import './Testimonials.css'
import Card from 'react-bootstrap/Card';
import Slider from "react-slick";
import { assets } from '../../assets/assets';






function AutoPlay() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };
    return (
      <div className="slider-container py-5">
        <Slider {...settings}>
          <div className='text-center' >
          <Card style={{ width: '18rem', backgroundColor: 'yellowgreen', }}>
      {/* <Card.Img  className='timg'  src={assets.team_2} /> */}
      <img className='timg py-2' src={assets.team_2} alt="" />
      <Card.Body>
        {/* <Card.Title className="titlename fs-3" >Lina Lissy</Card.Title> */}
        <h2 className='ttitle'>Lina Lissy</h2>

        <Card.Text>
          Best food in the town build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
         
          </div>
          <div className='text-center' >
          <Card style={{ width: '18rem', backgroundColor: 'yellowgreen', }}>
      {/* <Card.Img  className='timg'  src={assets.team_2} /> */}
      <img className='timg py-2' src={assets.team_1} alt="" />
      <Card.Body>
        {/* <Card.Title className="titlename fs-3" >Lina Lissy</Card.Title> */}
        <h2 className='ttitle'>Marcelo M12</h2>

        <Card.Text>
          Best food in the town build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
         
          </div>
          <div className='text-center' >
          <Card style={{ width: '18rem', backgroundColor: 'yellowgreen', }}>
      {/* <Card.Img  className='timg'  src={assets.team_2} /> */}
      <img className='timg py-2' src={assets.team_3} alt="" />
      <Card.Body>
        {/* <Card.Title className="titlename fs-3" >Lina Lissy</Card.Title> */}
        <h2 className='ttitle'>Jasmine Jazz</h2>

        <Card.Text>
          Best food in the town build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
         
          </div>
          <div className='text-center' >
          <Card style={{ width: '18rem', backgroundColor: 'yellowgreen', }}>
      {/* <Card.Img  className='timg'  src={assets.team_2} /> */}
      <img className='timg py-2' src={assets.team_2} alt="" />
      <Card.Body>
        {/* <Card.Title className="titlename fs-3" >Lina Lissy</Card.Title> */}
        <h2 className='ttitle'>Lina Lissy</h2>

        <Card.Text>
          Best food in the town build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
         
          </div>
          <div className='text-center' >
          <Card style={{ width: '18rem', backgroundColor: 'yellowgreen', }}>
      {/* <Card.Img  className='timg'  src={assets.team_2} /> */}
      <img className='timg py-2' src={assets.team_1} alt="" />
      <Card.Body>
        {/* <Card.Title className="titlename fs-3" >Lina Lissy</Card.Title> */}
        <h2 className='ttitle'>Lina Lissy</h2>

        <Card.Text>
          Best food in the town build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
         
          </div>
          <div className='text-center' >
          <Card style={{ width: '18rem', backgroundColor: 'yellowgreen', }}>
      {/* <Card.Img  className='timg'  src={assets.team_2} /> */}
      <img className='timg py-2' src={assets.team_3} alt="" />
      <Card.Body>
        {/* <Card.Title className="titlename fs-3" >Lina Lissy</Card.Title> */}
        <h2 className='ttitle'>Lina Lissy</h2>

        <Card.Text>
          Best food in the town build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
         
          </div>
        </Slider>
      </div>
    );
  }
  
  export default AutoPlay;
  
  
  







