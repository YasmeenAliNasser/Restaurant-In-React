import React, { Fragment } from 'react'
import Header from './Header'
import './Home.css';
import Navs from '../Navs/Navs';
import food1 from './../../assets/food1.png';
import food4 from './../../assets/food4.png'
import Data from '../../Data';
import { Carousel } from 'react-bootstrap';
import one from './../../assets/one.jpg';
import two from './../../assets/two.jpg';



const Home = () => {
  const blogitem=Data.map((item)=>{
         return(
          <div className='col-md-4'>
            <div className='box'>
            <img src={item.img}/>
           <h5>{item.title}</h5> 
            <h6>{item.time}</h6>
           <h7> {item.price}</h7>
            </div>
            <button><a href='#'>Order Now</a></button>
          </div>
         )
  })
  return (
    
    <Fragment>
      <Navs/>
      <Header/>
         <section className='numbers'>
         <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <h2>
               1287+
              </h2>
              <h6>SAVING</h6>
            </div>
            <div className='col-md-3'>
              <h2>
               5786+
              </h2>
              <h6>PHOTOS</h6>
            </div>
            <div className='col-md-3'>
              <h2>
               1440+
              </h2>
              <h6>ROCKETS</h6>
            </div>
            <div className='col-md-3'>
              <h2>
               7110+
              </h2>
              <h6>GLOBES</h6>
            </div>
          </div>
         </div>
      </section>
      <section className='pride'>
       <div className='row'>
          <div className='col-md-6'>
               <h2>
                 We pride ourselves on making real food from the best ingredients.
                </h2> 
                <p> we use orginc and fresh ingredients  becouse your is very important for us if you need to learn more press this </p>
                
                <button className='order'>Learn More </button>
                
            </div>
            <div className='col-mad-6'>
                <img src={food1} title="food1"/>
            </div>
         </div>
      </section>
      <section className='ingred'>
      <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <h2>
               We make every by hand with the best possiple ingredients
              </h2>
              <p>Now you can buy the finest types of food at the cheapest prices</p>
              <ul>
                <li>Fresh ingredients</li>
                <li>Top qaulity</li>
                <li>Cheapest price</li>
              </ul>
              <button>
                Learn More
              </button>
            </div>
            <div className='col-md-6'>
              <img src={food4} alt='food4'/>
            </div>

            
          </div>
         </div>

      </section>
      <section className='watch'>
      <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-md-12'>
              <h2>
               When a man stomach is full makes no difference whether he is rich or poor.
              </h2>
              <p> we use orginc and fresh ingredients  becouse your is very important for us if you need to learn more press this </p>
              <a href='#'> Watch Our Story</a>
           </div>
           </div>
           </div>
      </section>
      <section className='sales'>
      <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-md-12'>
              <h2>
               Explore Our Foods
              </h2>
              <p> we use orginc and fresh ingredients  becouse your is very important for us if you need to learn more press this </p>
              
           </div>
           </div>
           <div className='row'>
          { blogitem}
           </div>
           </div>
      </section>
      <section className='slider'>
      <Carousel>
      <Carousel.Item>
        <img src={one} title=''/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={two} title=''/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
  

      </section>
      <section className='footer'>
      <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2>
               Hurry Up To Subscribe Our Newsletter And Get 25% Off
              </h2>
              <p> every thing is available in our returant </p>
              <input type='email' placeholder='enter your email'>
              </input>
              <button>
                 Subscribe
              </button>
           </div>
           </div>
           
           </div>
           <h1>GUSTO RESTURANT</h1>

      </section>
    </Fragment>
     
  )
}

export default Home
