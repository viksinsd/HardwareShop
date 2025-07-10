import React, { useContext } from 'react'
import './ItemDisplay.css'
import ItemItem from '../ItemItem/ItemItem'
import { StoreContext } from '../../Context/StoreContext'

const ItemDisplay = ({category}) => {

  const {item_list} = useContext(StoreContext);

  return (
    <div className='item-display' id='item-display'>
      <h2>Best-selling building essentials near you</h2>
      <div className='item-display-list'>

        {item_list.map((item)=>{
          if (category==="All" || category===item.category) {
            console.log(item.category)
            console.log(category)
            return <ItemItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id}/>
          }
        })}
      </div>
    </div>
  )
}

export default ItemDisplay
