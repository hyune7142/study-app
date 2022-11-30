import React, { useState } from 'react';
import CounterButton from '../atom/counterButton';
import CounterView from '../atom/counterView';

const counter = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count+1);
    }

    const decrease = () => {
        setCount(count-1);
    }

    return (
        <div>
            <CounterView count={count} />
            <CounterButton increase={increase} decrease={decrease}/>
        </div>
    );
};

export default counter;