import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Shop = () => {
  const shopImages = {
    images: [
      {
        id: '1',
        category: 'couch',
        name: "Luxe 3-Seater Sofa",
        price: "R 3750.00",
        url: require("./images/1.jpg")
      },
      {
        id: '2',
        category: 'couch',
        name: "Urban Loft Loveseat",
        price: "R 3045.00",
        url: require("./images/2.jpg")
      },
      {
        id: '3',
        category: 'couch',
        name: "Classic Roll-Arm Couch",
        price: "R 5689.00",
        url: require("./images/3.jpg")
      },
      {
        id: '4',
        category: 'couch',
        name: "Cloud Comfort Sectional",
        price: "R 4890.00",
        url: require("./images/4.jpg") 
      },
      {
        id: '5',
        category: 'couch',
        name: "Mid-Century Tufted Sofa",
        price: "R 3489.00",
        url: require( "./images/7.jpg")
      },
      {
        id: '6',
        category: 'couch',
        name: "Deep-Seated Velvet Couch",
        price: "R 5300.00",
        url: require("./images/10.jpg") 
      },
      {
        id: '7',
        category: 'chairs',
        name: "Nordic Comfort Chair",
        price: "R 1120.00",
         url: require("./images/28.jpg") 
      },
      {
        id: '8',
        category: 'chairs',
        name: "Urban Lounge Accent Chair",
        price: "R 2590.00",
         url: require("./images/24.jpg") 
      },
      {
        id: '9',
        category: 'chairs',
        name: "Coastal Breeze Rocker",
        price: "R 890.00",
         url: require("./images/26.jpg") 
      },
      {
        id: '10',
        category: 'chairs',
        name: "Scandinavian Wingback",
        price: "R 568.00",
         url: require("./images/15.jpg") 
      },
      {
        id: '11',
        category: 'chairs',
        name: "Bistro Chair",
        price: "R 800.00",
         url: require("./images/16.jpg") 
      },
      {
        id: '12',
        category: 'chairs',
        name: "Minimalist chair",
        price: "R 450.00",
         url: require("./images/17.jpg") 
      },
      {
        id: '13',
        category: 'chairs',
        name: "Accent Chair",
        price: "R 890.00",
         url: require("./images/18.jpg") 
      },
      {
        id: '14',
        category: 'chairs',
        name: "broad Accent Chair",
        price: "R 1 890.00",
         url: require("./images/20.jpg") 
      },
      {
        id: '15',
        category: 'wood',
        name: "",
        price: "R 1 890.00",
         url: require("./images/8.jpg") 
      },
      {
        id: '16',
        category: 'wood',
        name: "",
        price: "R 1 890.00",
         url: require("./images/9.jpg") 
      },
      {
        id: '17',
        category: 'wood',
        name: "",
        price: "R 1 890.00",
         url: require("./images/5.jpg") 
      },
      {
        id: '18',
        category: 'wood',
        name: "",
        price: "R 1 890.00",
         url: require("./images/13.jpg") 
      }
    ]
  };
  const [myImages, setMyImages] = useState([])
  useEffect(()=>{
  setMyImages(shopImages.images)
  }, [])
 
  return (
    <>
      <section className="hero-section">
        <div className="hero" data-aos="fade">
          <img
            src={require("./images/shopHero.jpg")}
            alt="Hero"
            data-aos="zoom-in"
            className="animate__animated animate__fadeIn animate__slow	3s"
          />
          <div className="center-text">
            <h1 className="animate__animated animate__lightSpeedInRight animate__slow	2s shop-hero">
              The art thats made just for you
            </h1>
            <p className="animate__animated animate__lightSpeedInLeft animate__slow	2s">
            Transform your space into a true sanctuary with thoughtfully designed pieces that prioritize comfort, are built for lasting durability, and bring timeless style that sparks inspiration every day. </p>
          </div>
        </div>
      </section>
      <section className="shop">
       <div className="cart"></div>
       <div className="shop-image-container">

       { Array.isArray(myImages) && myImages.map((item)=>(
      
        <figure key={item.id}>
          <img src={item.url} alt={item.name}/>
          <figcaption>{item.name} <br /> {item.price}</figcaption>
          <button className='hvr-radial-out custom-radial'>add to cart</button>
        </figure>
       ))
       }
       </div>
      </section>
    </>
  );
};

export default Shop;
