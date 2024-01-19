import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {remove} from '../store/cartSlice'

const Cart = () => {

    const items = useSelector(state => state.cart)

    const dispatcher = useDispatch()
    const removeFromCart = itemId =>{
        dispatcher(remove(itemId))
    }

  return (
    <div className='cardWrapper'>
        {
            items.map(item => {
                return <div className='cartCard'>
                    <img src={item.image} alt='product'/>
                    <h6>{item.title}</h6>
                    <h5>{item.price}</h5>
                    <button className='remove-btn' onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            })
        }
    </div>
  )
}

export default Cart