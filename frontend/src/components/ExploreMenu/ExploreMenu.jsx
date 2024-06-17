import React from 'react'
import './ExploreMenu.css'
import { menu_list} from '../../assets/assets'

const ExploreMenu = () => {
  return (


    <div className='explore-menu' id='explore-menu'>
        {/* ExploreMenu Big Text */}
        <h1>Explore our code store</h1>
        {/* ExploreMenu Description */}
        <p className='explore-menu-test'>purchase and sale the best codes from the best programmers in the world!</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    // menu list image setting
                    <div key={index} className='explore-menu-list-item'>
                        <img src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
