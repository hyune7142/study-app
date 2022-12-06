import React from 'react';

type counterProps = {
    increase: () => void,
    decrease: () => void,
}

const counterButton = ({ increase, decrease }: counterProps) => {
    return (
        <div id='contents'>
            <div>
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
            </div>
        </div>
    );
};

export default counterButton;