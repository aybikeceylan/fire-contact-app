import React, { useState } from 'react'
import { EditUser, writeUserData } from '../utils/firebase'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Users from './Users';


const Contact = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [gender, setGender] = useState("")
    const { setİsEdit } = writeUserData()
    console.log(name)
    console.log(phone)
    console.log(gender)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            EditUser(name, phone, gender)
            setİsEdit(!isEdit)
        } else {
            writeUserData(name, phone, gender)
            setName("")
            setPhone("")
            setGender("")
        }

        console.log(name, phone, gender)
    }
    const handleEdit = (username, phone, gender, isEdit) => {
        setName(username)
        setPhone(phone)
        setGender(gender)


    }

    return (
        <div className='flex '>
            <div className='w-25 ml-5  p-5'>
                <h3>ADD CONTACT</h3>
                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3">

                        <Form.Control id="disabledTextInput" placeholder="Name" value={name}
                            onChange={(e) => { setName(e.target.value) }} />
                    </Form.Group>
                    <Form.Group className="mb-3">

                        <Form.Control id="disabledTextInput" placeholder="Phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                    </Form.Group>
                    <Form.Group className="mb-3" onChange={(e) => { setGender(e.target.value) }}>

                        <Form.Select id="disabledSelect">
                            <option defaultValue="Gender">Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </Form.Select>
                    </Form.Group>

                    <Button type="submit">Add</Button>

                </Form>

            </div>
            <Users handleEdit={handleEdit} />
        </div>

    )
}

export default Contact