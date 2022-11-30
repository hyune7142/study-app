import React, { useState } from 'react';

const counterButton = (props: any) => {
    const { count } = props
    return (
        <div className='counter'>
            <h1>{count}</h1>
        </div>
    );
};

export default counterButton;