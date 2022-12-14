import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

const ControlUncontrol = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [num, setNum] = useState(0);
    const [text, setText] = useState('');
    const [number, setNumber] = useState(0);


    useLayoutEffect(() => {
        console.log('mount before');
        setNum(100);
    }, [])

    useEffect(() => {
        console.log('didMount')
        // const intervalId = interval()
        return () => {
            console.log('unMount');
            // clearInterval(intervalId);
        }
    }, [])

    useEffect(() => {
        console.log('변화감지' + num);
    }, [num])


    useEffect(() => {
        console.log(text, number);
    }, [text, number])

    const interval = () => {
         return setInterval(() => {
            setNum((prev) => prev + 1);
        }, 2000);
    }

    const onFocus = () => {
        inputRef.current?.focus();
    }

    return (
        <div>
            <div>{`현재 숫자: ${num}`}</div>
            <input type='text' onChange={e => setText(e.target.value)} value={text}/> 
            <br />
            <input ref={inputRef} type='number' />
            <button onClick={onFocus}>포커스</button>
        </div>
    );
};

export default ControlUncontrol;