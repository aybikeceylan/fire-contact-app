import React from 'react'
import Table from 'react-bootstrap/Table';
import { DeleteBtn, EditBtn } from '../assets/Icons';
import { DeleteUser, GetUser } from '../utils/firebase';

const Users = ({ handleEdit }) => {
    const { contactList } = GetUser()


    return (
        <div className='w-50'>
            <h3 className="text-center">CONTACTS</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>UserName</th>
                        <th>Phone Number</th>
                        <th>Gender</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {contactList?.map((element) => {
                        console.log(element.id);
                        return (
                            <tr>
                                <td>{element.username}</td>
                                <td>{element.phone}</td>
                                <td>{element.gender}</td>

                                <td>
                                    <button onClick={() => {
                                        handleEdit(
                                            element?.username,
                                            element?.phone,
                                            element?.gender,
                                            element?.id
                                        );
                                    }} >
                                        <EditBtn />
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => DeleteUser(element.id)}>
                                        <DeleteBtn />
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default Users