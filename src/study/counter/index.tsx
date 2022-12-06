import React, { useState } from 'react';
import CounterButton from './counterButton';

const counter = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count+1);
    }

    const decrease = () => {
        setCount(count-1);
    }

    return (
        <div id="contents">
            <h1>{count}</h1>
            <CounterButton increase={increase} decrease={decrease}/>
        </div>
    );
};

export default counter;