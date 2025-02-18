import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/cake/cakeAction';

const CakeContainer = () => {
    let numOfCakes=useSelector(state=>state.numOfCakes);
    let dispatch=useDispatch();
  return (
    <div>
        <h1>Number of cakes in the bakery: {numOfCakes}</h1>
        <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default CakeContainer