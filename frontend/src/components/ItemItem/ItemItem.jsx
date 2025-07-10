import React, { useContext, useState } from 'react'
import './ItemItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';

const ItemItem = ({ image, name, price, desc , id }) => {

    const [itemCount, setItemCount] = useState(0);
    const {cartItems,addToCart,removeFromCart,url,currency} = useContext(StoreContext);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
    return (
        <div className='item-item'>
            <div className='item-item-img-container'>
                <img className='item-item-image' src={backendUrl+"/images/"+image} alt="" />
                {!cartItems[id]
                ?<img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                :<div className="item-item-counter">
                        <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)} alt="" />
                        <p>{cartItems[id]}</p>
                        <img src={assets.add_icon_green} onClick={()=>addToCart(id)} alt="" />
                    </div>
                }
            </div>
            <div className="item-item-info">
                <div className="item-item-name-rating">
                    <p>{name}</p> <img src={assets.rating_starts} alt="" />
                </div>
                <p className="item-item-desc">{desc}</p>
                <p className="item-item-price">{currency}{price}</p>
            </div>
        </div>
    )
}

export default ItemItem
