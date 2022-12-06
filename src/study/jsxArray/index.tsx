import React from 'react';

const JsxReturn = () => {
    
    const arr = ['A', 'B', 'C'];

    // 배열형태로 JSX를 리턴가능
    const _renderRow = (arr: string[]) => {
        const comp = arr.map(item => (
            <h2 key={item}>{item}</h2>
        ));
        return comp
    }
    
    const _renderArr = () => {
        return [
            <h2 key='sample1'>테스트1</h2>,
            <h2 key='sample2'>테스트2</h2>,
            <h2 key='sample3'>테스트3</h2>,
        ];
    }
    
    return (
        <div  id="contents">
            {_renderRow(arr)}
            {_renderArr()}
        </div>
    );
};

export default JsxReturn;