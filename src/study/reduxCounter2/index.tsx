import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { setNum } from '../../modules/counterSlice';

const counter = () => {
    const count = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch();

    return (
        <div id="contents">
            <h1>{count}</h1>
            <input type='range' value={count} onChange={e => dispatch(setNum(+e.target.value))}/>
        </div>
    );
};

export default counter;