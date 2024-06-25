import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import ItemDisplay from '../../components/ItemDisplay/ItemDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

  // Category setting
  const [category,setCategory] = useState("All");



  return (
    <div>
        {/* sequence of jsx on the homepage */}
      <Header/>
      {/* Showing Category and Items */}
      <ExploreMenu category={category} setCategory={setCategory}/> 
      <ItemDisplay category={category}/>
      <AppDownload/>
    </div>  
  )
}

export default Home
