import React, { useRef } from 'react';

const UseRef = () => {
    const inputRef = useRef();
    const count = useRef(1);


    // 일반적인 사용케이스는 DOM에 접근할 때 사용됨
    const _handleFocus = () => {
        inputRef.current.focus();
    }


    // Ref는 변화가 있어도 리렌더링이 되지 않음.
    // state의 변화로 렌더링이 일어나도 Ref의 값은 유지됨
    const _nextCnt = () => {
        count.current += 1;
        console.log(count.current);
    }

    return (
        <div  id="contents">
            <input ref={inputRef} name='name' />
            <br />
            <button onClick={_handleFocus}>포커스 주기</button>
            <button onClick={_nextCnt}>카운트 올리기</button>
        </div>
    );
};

export default UseRef;