import React from 'react';
import { ChildProp } from './type'

const FuncComp = ({ name, onChange, changeType }: ChildProp) => {
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