import React from 'react'
import CartLike from './CartLike'
import CartBagSummary from './CartBagSummary'

const Cart = () => {
  return (
    <div>
      <title>Bag. Nike Store.</title>

      <CartBagSummary />
      <CartLike />
    </div>
  )
}

export default Cart
