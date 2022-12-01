import React, { useState } from 'react';
import ClassComp from './classComp';
import FuncComp from './funcComp';
import { LifeCycleProp, ChildProp } from './type';

const LifeCycle = ({ solution }: LifeCycleProp) => {
    const [type, setType] = useState('class');
    const [name, setName] = useState('Name');
    const [customHookYn, setCustomHookYn] = useState(false);

    const defaultprops: ChildProp = {
        name,
        onChange: setName,
        changeType: setType,
    }

    const _renderContent = (type: string) => {
        switch(type) {
            case 'class':
                return <ClassComp {...defaultprops} />
            case 'function':
                return <FuncComp {...defaultprops} customHook={customHookYn} />
            default:
                return ''
        }
    }

    const _toggleCustomHook = () => {
        setCustomHookYn(!customHookYn);
    }


    // JSX return문은 복잡한 로직을 포함하는 것 보단 간결하게 작성하는 것이 가독성에 좋음
    return (
        <div>
            {/* 간단할 경우 return문 내에서 처리할 경우도 있음 */}
            {solution === 'A' && type === 'class' && <ClassComp name={name} onChange={setName} changeType={setType} />}
            {solution === 'A' && type === 'function' && <FuncComp name={name} onChange={setName} changeType={setType} customHook={customHookYn} />}

            {/* 복잡한 로직이 필요한 경우는 함수로 외부에서 처리 */}
            {solution === 'B' && _renderContent(type)}

            {/* 함수형 컴포넌트에서 prevState, prevProps 확인 */}
            {type === 'function' && <button onClick={_toggleCustomHook}>{customHookYn ? '커스텀훅 해제': '커스텀훅 적용'}</button>}
        </div>
    );
};

export default LifeCycle;