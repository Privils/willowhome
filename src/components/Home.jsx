import React from 'react';
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
            <img src="" alt="" />
            <figcaption>living room</figcaption>
           </figure>
           <figure>
            <img src="" alt="" />
            <figcaption>bedroom</figcaption>
           </figure>
           <figure>
            <img src="" alt="" />
            <figcaption>office</figcaption>
           </figure>
           <figure>
            <img src="" alt="" />
            <figcaption>dining</figcaption>
           </figure>
           </div>
   </section>
   </>
  )
}

export default Home
