import React from 'react';
import './Home.css';
import Product from './Product'

function Home() {
    return (
      <div className="home">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
        />

        <div className="home__row">
          <Product
            id="65373"
            title="OPPO Reno 2F"
            price={18000}
            rating={5}
            image="https://www.whatmobile.com.pk/admin/images/Oppo/OppoReno2F-b.jpg"
          />
          <Product
            id="65373"
            title="Ninja 72.0-oz Black 2-Speed 1400.0-Watt Pulse Control Blender"
            price={1400}
            rating={5}
            image="https://mobileimages.lowes.com/product/converted/622356/622356554282.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="65373"
            title="The Lean Startup: How Constant Innovation Creates Progress"
            price={600}
            rating={5}
            image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105"
          />
          <Product
            id="65373"
            title="The Lean Startup: How Constant Innovation Creates Progress"
            price={700}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="65373"
            title="The Lean Startup: How Constant Innovation Creates Progress"
            price={400}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="65373"
            title="SAMSUNG C49J890DKU 49 LED CURVED BLACK COMPUTER MONITOR"
            price={50000}
            rating={5}
            image="https://www.ejobber.co.uk/assets/images/pic/61035903_2196267308.jpg"
          />
        </div>
      </div>
    );
}

export default Home
