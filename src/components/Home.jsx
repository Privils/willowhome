import React from 'react';
import { FaClipboard, FaFacebook, FaInstagram, FaLayerGroup, FaPen, FaPinterest, FaTiktok, FaTruck } from 'react-icons/fa';
import { FaClipboardUser } from 'react-icons/fa6';
import { Link } from 'react-router';

const Home = () => {
  return (
   <>
   <section className='hero-section'>
  <div className="hero">
   <img src={require('./images/hero.jpg')} alt="" />
   <div className="center-text">
    <h1>
    Furniture Made 
    for Living
    </h1>
    <p>
    Create a space that feels like home with 
pieces designed for comfort, crafted to last,
 and styled to inspire.
    </p>
   <Link to='#'>
   <button>shop</button>
   </Link>
   </div>
  </div>
   </section>
   <section className="sub-hero">
    <h1>Shop All Home Needs</h1>
    <div className="container">
        <div className="initial-image">
        <img src={require('./images/greenChair.jpg')} alt="Image of a chair" className='left-Image'/>
        </div>
        <div className="small-images">
            <figure>
                <img src={require('./images/loungeEwase.jpg')} alt="" className='small-img'/>
                <figcaption>loungeEase</figcaption>
                <button>click</button>
            </figure>
            <figure>
                <img src={require('./images/cozyNest.jpg')} alt="" className='small-img'/>
                <figcaption>cozyNest</figcaption>
                <button>click</button>
            </figure>
        </div>
    </div>

    <div className="container">
        <div className="small-images">
            <figure>
                <img src={require('./images/ergoFlow.jpg')} alt="" className='small-img'/>
                <figcaption>loungeEase</figcaption>
                <button>click</button>
            </figure>
            <figure>
                <img src={require('./images/curveline.jpg')} alt="" className='small-img'/>
                <figcaption>cozyNest</figcaption>
                <button>click</button>
            </figure>
        </div>
        <div className="initial-image">
        <img src={require('./images/twinSet.jpg')} alt="Image of a chair" className='left-Image'/>
        </div>
    </div>
   </section>
   <section className="cargo">
   <h1>smart Furniture for every home</h1>
           <div className="categories">
           <figure>
            <img src={require('./images/livingRoom.jpg')} alt="" />
            <figcaption>living room</figcaption>
           </figure>
           <figure>
            <img src={require('./images/bedroom.jpg')} alt="" />
            <figcaption>bedroom</figcaption>
           </figure>
           <figure>
            <img src={require('./images/office.jpg')} alt="" />
            <figcaption>office</figcaption>
           </figure>
           <figure>
            <img src={require('./images/dining.jpg')} alt="" />
            <figcaption>dining</figcaption>
           </figure>
           </div>
           <h1>Our Special Essentials</h1>
           <div className="services">
            <div className="houser">
                <p className="circle">
                    <FaPen className='icon'/>
                </p>
                <h3>Smart Design</h3>
                <p>Thoughtfully crafted for style 
                and daily comfort</p>
            </div>
            <div className="houser">
            <p className="circle">
                <FaLayerGroup/>
            </p>
                <h3>Built To Last</h3>
                <p>Durable materials, made to
                stand the test.</p>
            </div>
            <div className="houser">
            <p className="circle">
              <FaClipboardUser/>
            </p>
                <h3>Space optimization</h3>
                <p>Compact pieces that maximize 
                every inch.</p>
            </div>
            <div className="houser">
            <p className="circle">
                <FaTruck/>
            </p>
                <h3>Easy Shop</h3>
                <p>Seamless browsing, fast checkout,
                doorstep delivery.</p>
            </div>
           </div>
   </section>
   <section className='bottom-hero-section'>
  <div className="bottom-hero">
   <img src={require('./images/yellowCouch.jpg')} alt="" />
   <div className="bottom-center-text">
    <h1>
    Furniture Made 
    for Living
    </h1>
    <p>
    Create a space that feels like home with 
pieces designed for comfort, crafted to last,
 and styled to inspire.
    </p>
   <Link to='#'>
   <button>shop</button>
   </Link>
   </div>
  </div>
   </section>
   </>
  )
}

export default Home
