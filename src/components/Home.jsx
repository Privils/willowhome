import React from 'react';
import { FaClipboard, FaFacebook, FaInstagram, FaLayerGroup, FaPen, FaPinterest, FaTiktok, FaTruck } from 'react-icons/fa';
import { FaClipboardUser } from 'react-icons/fa6';
import { Link } from 'react-router';

const Home = () => {
  return (
   <>
   <section className='hero-section'>
    <div className="hero"  data-aos="fade">
     <img src={require('./images/hero.jpg')} alt="Hero" data-aos="zoom-in" className='animate__animated animate__fadeIn animate__slow	3s'/>
     <div className="center-text">
      <h1 className='animate__animated animate__lightSpeedInRight animate__slow	2s'>Furniture Made for Living</h1>
      <p className='animate__animated animate__lightSpeedInLeft animate__slow	2s'>Create a space that feels like home with pieces designed for comfort, crafted to last, and styled to inspire.</p>
      <Link to='#'>
        <button className='hvr-radial-out custom-radial animate__animated animate__fadeInLeft'>Shop</button>
      </Link>
     </div>
    </div>
   </section>

   {/* Sub Hero Section */}
   <section className="sub-hero" data-aos="fade-up">
    <h1 data-aos="fade-right" data-aos-duration="3000" className='animate__animated animate__flipInY animate__repeat-3	3'>Shop All Home Needs</h1>
    
    <div className="container">
      <div className="initial-image" data-aos="fade-right">
        <img src={require('./images/greenChair.jpg')} alt="Green Chair" className='left-Image hvr-shrink'/>
      </div>
      <div className="small-images" data-aos="fade-left">
        <figure data-aos="zoom-in" data-aos-delay="200" className='hvr-bob'>
          <img src={require('./images/loungeEwase.jpg')} alt="loungeEase" className='small-img'/>
          <figcaption>loungeEase</figcaption>
          <button className='hvr-radial-out custom-radial'>Click</button>
        </figure>
        <figure data-aos="zoom-in" data-aos-delay="400" className='hvr-bob'>
          <img src={require('./images/cozyNest.jpg')} alt="cozyNest" className='small-img'/>
          <figcaption>cozyNest</figcaption>
          <button className='hvr-radial-out custom-radial'>Click</button>
        </figure>
      </div>
    </div>

    <div className="container">
      <div className="small-images" data-aos="fade-right">
        <figure data-aos="zoom-in" data-aos-delay="200" className='hvr-bob'>
          <img src={require('./images/ergoFlow.jpg')} alt="ergoFlow" className='small-img'/>
          <figcaption>ergoFlow</figcaption>
          <button className='hvr-radial-out custom-radial'>Click</button>
        </figure>
        <figure data-aos="zoom-in" data-aos-delay="400" className='hvr-bob'>
          <img src={require('./images/curveline.jpg')} alt="curveline" className='small-img hvr-float-shadow'/>
          <figcaption>curveline</figcaption>
          <button className='hvr-radial-out custom-radial'>Click</button>
        </figure>
      </div>
      <div className="initial-image" data-aos="fade-left">
        <img src={require('./images/twinSet.jpg')} alt="Twin Set" className='left-Image hvr-shrink'/>
      </div>
    </div>
   </section>

   {/* Cargo Section */}
   <section className="cargo">
    <h1 data-aos="fade-right">Smart Furniture for Every Home</h1>
    
    <div className="categories">
      <figure data-aos="fade-up" data-aos-delay="200">
        <img src={require('./images/livingRoom.jpg')} alt="Living Room" className="hvr-float"/>
        <figcaption className='hvr-float-shadow'>Living Room</figcaption>
      </figure>
      <figure data-aos="fade-up" data-aos-delay="300">
        <img src={require('./images/bedroom.jpg')} alt="Bedroom" className="hvr-float"/>
        <figcaption className='hvr-float-shadow'>Bedroom</figcaption>
      </figure>
      <figure data-aos="fade-up" data-aos-delay="400">
        <img src={require('./images/office.jpg')} alt="Office" className="hvr-float"/>
        <figcaption className='hvr-float-shadow'>Office</figcaption>
      </figure>
      <figure data-aos="fade-up" data-aos-delay="500">
        <img src={require('./images/dining.jpg')} alt="Dining" className="hvr-float"/>
        <figcaption className='hvr-float-shadow'>Dining</figcaption>
      </figure>
    </div>

    <h1 data-aos="fade-left">Our Special Essentials</h1>

    <div className="services">
      <div className="houser" data-aos="flip-left" data-aos-delay="300">
        <p className="circle">
          <FaPen className='icon'/>
        </p>
        <h3>Smart Design</h3>
        <p>Thoughtfully crafted for style and daily comfort</p>
      </div>
      <div className="houser" data-aos="flip-left" data-aos-delay="400">
        <p className="circle">
          <FaLayerGroup/>
        </p>
        <h3>Built To Last</h3>
        <p>Durable materials, made to stand the test.</p>
      </div>
      <div className="houser" data-aos="flip-left" data-aos-delay="450">
        <p className="circle">
          <FaClipboardUser/>
        </p>
        <h3>Space Optimization</h3>
        <p>Compact pieces that maximize every inch.</p>
      </div>
      <div className="houser" data-aos="flip-left" data-aos-delay="500">
        <p className="circle">
          <FaTruck/>
        </p>
        <h3>Easy Shop</h3>
        <p>Seamless browsing, fast checkout, doorstep delivery.</p>
      </div>
    </div>
   </section>

   {/* Bottom Hero Section */}
   <section className='bottom-hero-section' data-aos="fade">
    <div className="bottom-hero">
     <img src={require('./images/yellowCouch.jpg')} alt="Yellow Couch" data-aos="zoom-in" />
     <div className="bottom-center-text" data-aos="fade-up" data-aos-delay="300">
      <h1>Furniture Made for Living</h1>
      <p>Create a space that feels like home with pieces designed for comfort, crafted to last, and styled to inspire.</p>
      <Link to='#'>
        <button data-aos="fade-up" data-aos-delay="600" className='hvr-radial-out custom-radial'>Shop</button>
      </Link>
     </div>
    </div>
   </section>
   </>
  )
}

export default Home