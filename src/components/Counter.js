import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state=>state.counter);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => {dispatch(increment())}}>Increment</button>
        <button onClick={()=> {dispatch(decrement())}}>Decrement</button>
        <button onClick={()=> dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter