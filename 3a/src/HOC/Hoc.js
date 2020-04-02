import React, { useState, useEffect } from 'react';
const withSubscription = WrappedComponent => props => {
    const [users, setUsers] = useState([]);
    // const [currentUser, setCurrentUser] = useState('');
    const [newUser, setNewUser] = useState('Adnan');
    useEffect(() => {

    }, []);
    const handleUser = user => { };
    return <WrappedComponent newUser={newUser} users={users} {...props} />;
};
export default withSubscription;
