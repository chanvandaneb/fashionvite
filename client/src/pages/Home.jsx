import React from 'react'
import Categories from '../components/Categories'
import Newsletter from '../components/Newsletter'
import Product from '../components/Product'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <Slider/>
      <Categories/>
      <Product/>
      <Newsletter/>
    </div>
  )
}

export default Home