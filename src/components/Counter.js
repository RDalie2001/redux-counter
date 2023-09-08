import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, incrementByAmount, increment, reset } from '../redux/counterSlice';
import classes from './Counter.module.css';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state=>state.counter);
  return (
    <div className="container-fluid justify-content-center align-self-center p-5">
        <div className='row '>
        <h1 className='text-center col-md-12'>{count}</h1>
        </div>
        <div className='row justify-content-around mt-3'>
        <button className='col-md-2 btn btn-warning' onClick={() => {dispatch(increment())}}>Increment</button>
        <button className='col-md-2 btn btn-warning' onClick={()=> {dispatch(decrement())}}>Decrement</button>
        <button className='col-md-2 btn btn-warning' onClick={()=> dispatch(reset())}>Reset</button>

        <button className='col-md-2 btn btn-warning' onClick={() => dispatch(incrementByAmount(5))}>Increment By 5</button>
        </div>
    </div>
  )
}

export default Counter