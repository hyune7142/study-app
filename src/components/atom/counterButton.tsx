import React, { useState } from 'react';

const counterButton = (props: any) => {
    const { increase, decrease } = props;
    return (
        <div className='counter'>
            <div>
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
            </div>
        </div>
    );
};

export default counterButton;