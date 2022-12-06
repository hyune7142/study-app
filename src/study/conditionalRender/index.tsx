import React, { useState } from 'react';

const ConditionalRender = () => {
    const [send, setSend] = useState(false);
    const [bool, setBool] = useState(false);

    const _send = () => {
        setSend(true);
    }

    const _reset = () => {
        setSend(false);
        setBool(false);
    }

    return (
        <div  id="contents">
            {!send ? (
                <>
                    <div>우리 사귈래?</div>
                    <button onClick={() => _send()}>라고 말해보기</button>
                </>
            ) : (
                <React.Fragment>
                    <h3>{bool ? '좋아' : '싫어'}</h3>
                    {!bool && <button onClick={() => setBool(true)}>재도전 해보기</button>}
                    {send && bool && <button onClick={_reset}>초기화</button>}
                </React.Fragment>
            )}
        </div>
    );
};

export default ConditionalRender;