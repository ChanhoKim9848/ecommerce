import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'

const Home = () => {
  return (
    <div>
        {/* sequence of jsx on the homepage */}
      <Header/>
      <ExploreMenu/>
    </div>  
  )
}

export default Home
