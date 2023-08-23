import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';

const NavBar = () => {

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Phanox</Link>
      </p>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{2}</span>
      </button>

      {<Cart />}
    </div>
  )
}

export default NavBar