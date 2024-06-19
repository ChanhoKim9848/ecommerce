import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import ItemDisplay from '../../components/ItemDisplay/ItemDisplay'

const Home = () => {

  // Category setting
  const [category,setCategory] = useState("All");



  return (
    <div>
        {/* sequence of jsx on the homepage */}
      <Header/>
      {/* we can make function as a data structure*/}
      {/* Showing Category and Items */}
      <ExploreMenu category={category} setCategory={setCategory}/> 
      <ItemDisplay category={category}/>
    </div>  
  )
}

export default Home
