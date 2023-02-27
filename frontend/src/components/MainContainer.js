import React, { useEffect, useState } from 'react'
import Detail from '../pages/Detail'
import MyStock from './MyStock'
import './MainContainer.css'
import { useParams } from 'react-router-dom'

const MainContainer = ({myStock, myStockLength, setMyStockLength, setMyStock, symbol, setSymbol}) => {
    const params = useParams();
    const [isStockSelected, setIsStockSelected] = useState(false)

    useEffect(() => {
        // const params = useParams();
        // setSymbol(params.symbol)
        if (params.symbol) {
            // console.log("params: ",symbol)
            setIsStockSelected(true);
        } else {
            setIsStockSelected(false);
        }
        // console.log("심볼: ",symbol,"주식 선택 됐는지:", isStockSelected, "응답 오류 있는지:", isResponseError);
    },[params.symbol, setIsStockSelected, setSymbol, symbol])

    return (
        <div className='mainContainer'>
            <MyStock myStock={myStock} myStockLength={myStockLength}/>
            {isStockSelected ?
            <Detail myStock={myStock} myStockLength={myStockLength} setMyStockLength={setMyStockLength} setMyStock={setMyStock} symbol={symbol} setSymbol={setSymbol}/> : <p>주식을 검색 또는 선택해 주세요</p>
            }
        </div>
    )
}

export default MainContainer
