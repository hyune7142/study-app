import React from 'react';
import CounterButton from './counterButton';
import { decrement, increment } from '../../modules/counterSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';

const counter = () => {
    const count = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch();

    const increaseNum = () => {
        dispatch(increment());
    }

    const decreaseNum = () => {
        dispatch(decrement());
    }

    return (
        <div id="contents">
            <h1>{count}</h1>
            <CounterButton increase={increaseNum} decrease={decreaseNum}/>
        </div>
    );
};

export default counter;