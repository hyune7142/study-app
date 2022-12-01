import React from 'react';
import { export1 as test1, export2, export3 } from './export';
import test from './export';

const ExportSample = () => {
    return (
        <div>
            <h2>{`export는 {} 감싸서 export, import`}</h2>
            <span>{`${test1}, ${export2}, ${export3}`}</span>
            <span>{`export default는 감싸지 않아도 되며, as 없이 명칭을 바꾸어 사용가능`}</span>
            <span>{`${test}`}</span>
        </div>
    );
};

export default ExportSample;