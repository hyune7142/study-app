import React, { useRef, useState, useLayoutEffect, useId } from 'react';
import axios from 'axios';

interface Contacts {
    id: number,
    name: string,
    phone: string,
}

const api = axios.create({
    baseURL: 'http://192.168.0.131:8080/api',
});

const AxiosComp = () => {
    const uniqueID = useId();
    const nameRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const [contacts, setContacts] = useState<Contacts[]>([]);
    const [formData, setFormData] = useState<Partial<Contacts>>({
        name: '',
        phone: '',
    })

    const handleFormData = (name: string, value: string) => {
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    useLayoutEffect(() => {
        getContacts()
    }, []);

    const getContacts = async () => {
        try {
            const res = await api.get('/contacts');
            setContacts(res.data);
        } catch (err) {
            console.debug(err);
        }
    }

    const createContact = async () => {
        try {
            const res = await api.post('/contacts', formData);
            if(res.status === 200) {
                if (nameRef.current && phoneRef.current) {
                    nameRef.current.value = '';
                    phoneRef.current.value = '';
                }
                getContacts();
            }
        } catch (error) {
            console.debug(error);
        }
    }

    console.debug(formData, uniqueID);

    return (
        <div>
            <h1>Contacts</h1>
            <hr />
            <div>
                <label htmlFor='name'>이름</label>
                <input ref={nameRef} type='text' name='name' onChange={e => handleFormData(e.target.name, e.target.value)}/>
            </div>
            <div>
                <label htmlFor='phone'>연락처</label>
                <input ref={phoneRef} type='text' name='phone' onChange={e => handleFormData(e.target.name, e.target.value)}/>
            </div>
            <button type='button' title='추가' onClick={createContact}>추가</button>

            <hr />
            <h1>연락처 리스트</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PHONE</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(item => (
                        <tr key={uniqueID + item.id}>
                            <th>{item.id}</th>
                            <th>{item.name}</th>
                            <th>{item.phone}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AxiosComp;