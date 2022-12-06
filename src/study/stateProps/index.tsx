import React, { useState } from 'react';
import FuncComp from './funcComp';
import ClassComp from './classComp';

const StateProps = () => {
    const [type, setType] = useState('class');
    const [name, setName] = useState('Name');

    return (
        <div  id="contents">
            {type === 'class' && <ClassComp name={name} onChange={setName} changeType={setType} />}
            {type === 'function' && <FuncComp name={name} onChange={setName} changeType={setType} />}
        </div>
    );
};

export default StateProps;