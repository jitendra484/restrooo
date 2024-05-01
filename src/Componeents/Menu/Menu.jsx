import React from 'react'
import './Menu.css'
import { menu_list } from '../../assets/assets'
import { Prev } from 'react-bootstrap/esm/PageItem'

const Menu = ({category, setCategory}) => {
  return (
    <div className='menu_list d-flex justify-content-between gap-5 py-3 text-center'>
        {menu_list.map((item, index )=>{
            return(
                <div onClick={()=>setCategory(Prev=>Prev===item.menu_name?"All":item.menu_name)} key={index} className='menu_list_item'>
                    <img className={category===item.menu_name?"active":""}src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>



                </div>
                
            )
        
        })}
        <hr />

    </div>
  )
}

export default Menu