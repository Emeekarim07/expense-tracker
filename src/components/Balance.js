import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import '../App.css'
const Balance = () => {
  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc,item )=> (acc += item), 0).toFixed(2)
  return (
    <>
      <h4 className='header'>Your Balance</h4>
      <h1 className='header'> ${total}</h1>
    </>
  )
}

export default Balance
