import React, { useState, useCallback, useMemo } from 'react';

interface FormItemParam {
    name: string
    type: 'text' | 'password'
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}


const UseMemoCallback = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [name, setName] = useState('');
    const [birth, setBirth] = useState('2022-12-27');

    const formItem = useCallback(({name, type, value, onChange}: FormItemParam) => {
        return (
            <tr key={name}>
                <th>{name}</th>
                <td>
                    <input name={name} type={type} value={value} onChange={onChange} autoComplete='off'/>
                </td>
            </tr>
        )
    }, []);


    const inputParams: FormItemParam[] = useMemo(() => {
        return [
            {
                name: '아이디',
                value: id,
                type: 'text',
                onChange: e => setId(e.target.value)
            },
            {
                name: '비밀번호',
                value: password,
                type: 'password',
                onChange: e => setPassword(e.target.value)
            },
            {
                name: '비밀번호 확인',
                value: password2,
                type: 'password',
                onChange: e => setPassword2(e.target.value)
            },
            {
                name: '이름',
                value: name,
                type: 'text',
                onChange: e => setName(e.target.value)
            },
            {
                name: '생년월일',
                value: birth,
                type: 'text',
                onChange: e => setBirth(e.target.value)
            }
        ];
    }, [name, password, password2, id, birth])

    const regist = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({
            id, password
        })
    }, [id, password])

    return (
        <div  id="contents">
            <h2>회원가입</h2>
            <form onSubmit={regist}>
                <table>
                    <tbody>
                        {inputParams.map(item => formItem(item))}
                        {/* 
                        <tr>
                            <th>아이디</th>
                            <td>
                                <input type='text' value={id} onChange={e => setId(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <th>비밀번호</th>
                            <td>
                                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <th>비밀번호확인</th>
                            <td>
                                <input type='password' value={password2} onChange={e => setPassword2(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <th>이름</th>
                            <td>
                                <input type='text' value={name} onChange={e => setName(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <th>생년월일</th>
                            <td>
                                <input type='date'value={birth} onChange={e => setBirth(e.target.value)}/>
                            </td>
                        </tr> */}
                        <tr>
                            <td colSpan={2} style={{ textAlign: 'center' }}>
                                <button type='submit'>가입</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default UseMemoCallback;