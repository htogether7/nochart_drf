import React from 'react'
import { Link } from 'react-router-dom'
import './MyStock.css';

const MyStock = ({myStock, myStockLength}) => {
  return (
    <div className='stockList'>
        <ul>
            {myStockLength === 0 ? "주식을 추가해 주세요" : myStock.map((stock) => (
            <li key={stock}>
            <Link to={`/${stock}`}>{stock}</Link>
            </li>
        ))}
        </ul>
    </div>



  )
}

export default MyStock
