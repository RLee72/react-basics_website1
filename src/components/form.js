import { useState } from 'react';

export default function RegisterForm() {
    const [form, setForm] = useState ({
        firstName: 'Rian',
        lastName: 'Lee',
        email: 'rhiannon.illustration@gmail.com'
    });

    return (
        <>
            <label>
                &nbsp; &nbsp; First Name: &nbsp; 
                <input
                    value={form.firstName}
                    onChange={e => {
                        setForm({
                            ...form,
                            firstName: e.target.value
                        });
                    }}
                    />
            </label>
       
            <label>
                &nbsp; &nbsp; Last Name: &nbsp; 
                <input
                    value={form.lastName}
                    onChange={e => {
                        setForm({
                            ...form,
                            lastName: e.target.value
                        });
                    }}
                    />
            </label>

            <label>
                &nbsp; &nbsp; Email: &nbsp; 
                <input      
                    value={form.email}
                    onChange={e => {
                        setForm({
                            ...form,
                            email: e.target
                        })
                    }}
                />
            </label>

            <p style={{ paddingTop: '5px'  }}></p>
                {' | '}
                {form.firstName}{' '}
                {form.lastName}{' | '}
                {form.email}{' | '}
            
        </>
    );
                }
