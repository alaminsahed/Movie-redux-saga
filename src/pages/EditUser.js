import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createUserStart } from '../redux/action';
import { toast } from 'react-toastify';


import {
    MDBValidation,
    MDBValidationItem,
    MDBInput,
    MDBBtn,
} from 'mdb-react-ui-kit';

const EditUser = () => {
    const [formValue, setFormValue] = useState({
        name: ' ',
        email: ' ',
    });

    const { name, email } = formValue;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    //const user = useSelector(state => state.user.users);

    const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email) {
            dispatch(createUserStart(formValue));
            toast.success('User created successfully');
            navigate('/home');
        }
    }

    return (
        <div className='mt-5'>
            <MDBValidation className='row g-3' noValidate onSubmit={handleSubmit}>
                <MDBValidationItem className='col-md-4'>
                    <MDBInput
                        value={name}
                        name='name'
                        onChange={onChange}
                        required
                        label='Name'
                        type='text'
                        validation="please enter your name"
                        invalid
                    />
                </MDBValidationItem>
                <MDBValidationItem className='col-md-4'>
                    <MDBInput
                        value={email}
                        name='email'
                        onChange={onChange}
                        required
                        label='Email'
                        type='email'
                        validation="please enter your email"
                        invalid
                    />
                </MDBValidationItem>
                <div className='col-12'>
                    <MDBBtn type='submit'>Submit</MDBBtn>
                    <MDBBtn onClick={() => navigate('/home')}>Back</MDBBtn>
                </div>
            </MDBValidation>
        </div>
    );
};

export default EditUser;