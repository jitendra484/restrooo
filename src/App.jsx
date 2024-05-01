import React, { useState } from 'react'
import Navbar from './Componeents/Navbar/Navbar'
import Hero from './Componeents/Home/Hero'
import Title from './Componeents/Title/Title'
import Menu from './Componeents/Menu/Menu'
import FoodDisplay from './Componeents/FoodDisplay/FoodDisplay'
import Testimonials from './Componeents/Testimonials/Testimonials'
import Footer from './Componeents/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Services from './Componeents/Services/Services'
import Contact from './Componeents/Contact/Contact'




const App = () => {
  const  [category, setCategory] = useState("All");
  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
      <Title   subTitle=' Hahahhahah hahhahhahha hhahahhhah hahhha' title='Explore Our Menu'/>
      <Menu category={category} setCategory={setCategory}/>
      <Title subTitle='' title=' Order Your Fav Dishes'/>
      <FoodDisplay category={category} />
      <Title subTitle='What our client say...!' title='Testimonials'/>
      <Testimonials/>
      <Footer/>
     

     
      

    </div>

   
  )
}

export default App