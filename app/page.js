import React from 'react'
import { Product, HeroBanner, FoooterBanner, FooterBanner } from './components';

const Home = () => {
  return (
    <>
    <HeroBanner />
    <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Speakers of many variotions</p>
    </div>
    <div className='products-container'>
      {['product1','product2'].map((p) => p)}
    </div>
    <FooterBanner />
    </>
  )
}

export default Home;