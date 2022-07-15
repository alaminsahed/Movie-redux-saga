import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createUserStart, updateUserStart } from '../redux/action';
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
    const [edit, setEdit] = useState(false);

    const { name, email } = formValue;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.users);
    const { id } = useParams()
    useEffect(() => {
        if (id) {

            const singleValue = user.find((info) => info.id === Number(id));
            console.log(user, id, singleValue);
            setFormValue({ ...singleValue })
            setEdit(true)
        }
    }, [id])

    const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email) {
            if (!edit) {
                dispatch(createUserStart(formValue));
                toast.success('User created successfully');
                navigate('/home');
            }
            else {
                dispatch(updateUserStart(formValue))
                setEdit(false)
                navigate('/home');
            }

        }
    }

    return (
        <div className='mt-5'>
            <MDBValidation className='row g-3' noValidate onSubmit={handleSubmit}>
                <MDBValidationItem className='col-md-4'>
                    <MDBInput
                        value={name || ""}
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
                        value={email || ""}
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