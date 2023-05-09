import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState'

const Transaction = ({transaction}) => {
    const { deleteTransactions } = useContext(GlobalContext)
 
    const sign = transaction.amount < 0 ? '-' : '+'
  return (
    <div>
     {transaction.amount !== 0 ? <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
          {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={()=> deleteTransactions(transaction.id)} className="delete-btn">x</button>
        </li> : null}
    </div>
  )
}

export default Transaction
