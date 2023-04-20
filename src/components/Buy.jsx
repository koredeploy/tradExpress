import React from "react";
import '../styles/IndiBusiness.css'

const Buy = () => {
  return <div>
    <form action="#" className='w-75 mx-auto py-3'>
    <label htmlFor="Coin to Buy" className='fw-semibold py-3'>Coin to Sell==</label>
        <select name="btc" id="Coin to Buy"  className='w-100 rounded-2 px-3 py-2 my-2' >
          <option value="Btc">Bitcoin (Btc)</option>
          <option value="Btc">USDT</option>
          <option value="Btc">ETH</option>
        </select>
        <label htmlFor="currency" className='fw-semibold py-3  my-2'>Currency</label>
        <select name="btc" id="currency"  className='w-100 rounded-2 px-3 py-2 ' placeholder='btc'>
          <option value="Btc">Naira (NGN)</option>
          <option value="Btc">Dollar ($)</option>
          <option value="Btc">Pounds</option>
        </select>
        <label htmlFor="amount" className='fw-semibold py-3  my-2'>Amount</label>
        <input className='w-100 rounded-2 px-3 py-2' type="text" placeholder='NGN | ' />

    
      <button className='btn signup-btn text-white w-100 py-2 my-4' > Continue</button>
   
    </form>
  </div>;
};

export default Buy;
