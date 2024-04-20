import React from 'react';
import UserContext from '../../Context/UserContext';
import Upload from '../Upload/Upload';
import { useContext } from 'react';

function Account() {
    const { user, logout } = useContext(UserContext);

    return (
        // true? showThis:false
        <div>{user ? (
            <div>
                <h2>Welcome, {user.username}!</h2>
                <Upload></Upload>
                <button onClick={logout}>Logout</button>
            </div>
        ) : (
            <p>Please log in to view your account.<button onClick={logout}>Logout </button></p>
        )}</div>
    )
}

export default Account