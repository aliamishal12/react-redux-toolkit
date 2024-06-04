import React from 'react'
import Sliders from '../components/Slider'
import Category from "../components/Category"
import Arrival from "../components/Arrival"
import Popular from "../components/Popular"
import BestSeller from "../components/BestSeller"
import Banner from "../components/Banner"
import Brand from "../components/Brand"
import ContactUs from "../components/ContactUs"
// import cartSlice from '../redux/cartSlice';

const Home = () => {
  return (
    <div>
    <div className='bg-white'>
      <Sliders />
      <Category />
      <Arrival />
      <Popular />
      <BestSeller />
      <Banner />
      <Brand />
    </div>
    <ContactUs />
    </div>
  )
}

export default Home
