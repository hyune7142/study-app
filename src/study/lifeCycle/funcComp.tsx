import React, { useEffect } from 'react';
import usePrev from './usePrev';
import { ChildProp } from './type'

const FuncComp = ({ name, onChange, changeType, customHook }: ChildProp) => {
    const prevName = usePrev(name);

    // deps에 []을 입력하면, didmount, unmount 때 동작
    useEffect(() => {
        _consoleLog('Function Comp - Didmount');

        return() => {
            _consoleLog('Function Comp - Unmount');
        }
    }, [])

    // deps에 특정 값을 주면, 해당값이 변경될 때 동작
    useEffect(() => {
        // class형 컴포넌트와 달리 PrevProp, PrevState를 확인할 수 없다.
        // 어떻게 해결할 수 있을까?
        if(!customHook) {
            _consoleLog(`curr Name :: ${name}`);
        } else {
            _consoleLog(`prev Name :: ${prevName}, curr Name :: ${name}`);
        }
    }, [name]);

    const _consoleLog = (text: string) => {
        console.log(text)
    } 

    return (
        <div>
            <h1>Function Component</h1>
            <input defaultValue={name} onChange={({ target: {value} }) => onChange(value)}></input>
            <br />
            <button onClick={() => changeType('class')}>클래스형 컴포넌트로 전환</button>
        </div>
    );
};




export default FuncComp;