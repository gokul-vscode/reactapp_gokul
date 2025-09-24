import React from 'react'
import Banner from '../components/Home/Banner/Banner'
import Category from '../components/Home/Category/Category'
import PopularProducts from '../components/Home/PopularProducts/PopularProducts'
import Tabs from '../components/Home/Tabs/Tabs'



const HomePage = () => {


  return (
    <>
        <Banner/>
        <Category/>
        <PopularProducts/>
        <Tabs/>
        {/* <Checkout/> */}
       
    </>
  )
}

export default HomePage