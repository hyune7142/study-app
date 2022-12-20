import React, { useRef, useState, useLayoutEffect, useId } from 'react';
import axios from 'axios';

interface Contacts {
    id: number,
    name: string,
    phone: string,
}

const api = axios.create({
    baseURL: 'http://127.0.0.1:8080/api',
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
            if(!fromDatavalid(formData)) return;
            const res = await api.post('/contacts', formData);
            if(res.status === 200) {
                if (nameRef.current && phoneRef.current) {
                    nameRef.current.value = '';
                    phoneRef.current.value = '';
                }
                getContacts();
                setFormData({
                    name: '',
                    phone: '',
                });
            }
        } catch (error) {
            console.debug(error);
        }
    }


    const deleteContact =async (id: number) => {
        const confirm = window.confirm('삭제하싈?');
        if(!confirm) return;
        try {
            const res = await api.delete(`/contacts/${id}`);
            if(res.status === 200) {
                getContacts();
            }
        } catch (error) {
            console.debug(error);
        }
    }

    const modifyContactMode = (item: Contacts) => {
        setFormData(item);
        if(nameRef.current && phoneRef.current) {
            nameRef.current.value = item.name;
            phoneRef.current.value = item.phone;
        } 
        
    }

    const fromDatavalid = (formData: Partial<Contacts>): boolean => {
        if(formData.name === '') return false;
        if(formData.phone === '') return false;
        return true;
    }

    const modifyContact = async () => {
        try {
            if(!fromDatavalid(formData)) return;
            const res = await api.put('/contacts', formData);
            if(res.status === 200) {
                if (nameRef.current && phoneRef.current) {
                    nameRef.current.value = '';
                    phoneRef.current.value = '';
                }
                getContacts();
                setFormData({
                    name: '',
                    phone: '',
                });
            }
        } catch (error) {
            console.debug(error);
        }
    }

    return (
        <div>
            <h1>Contacts</h1>
            <hr />
            <div>
                <label htmlFor='name' style={{ width: '50px', display: 'inline-block' }}>이름</label>
                <input ref={nameRef} type='text' name='name' onChange={e => handleFormData(e.target.name, e.target.value)}/>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label htmlFor='phone' style={{ width: '50px', display: 'inline-block' }}>연락처</label>
                <input ref={phoneRef} type='text' name='phone' onChange={e => handleFormData(e.target.name, e.target.value)}/>
            </div>
            {formData.id ? (
                <button type='button' title='수정' onClick={modifyContact}>수정</button>
            ) : (
                <button type='button' title='추가' onClick={createContact}>추가</button>
            )}
            <hr />
            <h1>연락처 리스트</h1>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>PHONE</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map(item => (
                            <tr key={uniqueID + item.id}>
                                <th>
                                    <input type='radio' onChange={() => modifyContactMode(item)} checked={item.id === formData.id}/>
                                </th>
                                <th>{item.id}</th>
                                <th>{item.name}</th>
                                <th>{item.phone}</th>
                                <th><button onClick={() => deleteContact(item.id)}>삭제</button></th>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    );
};

export default AxiosComp;