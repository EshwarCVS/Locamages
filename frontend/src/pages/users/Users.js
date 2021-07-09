import React from 'react';

import UsersList from '../../components/users/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1', 
            name: 'ES', 
            image:'https://avatars.githubusercontent.com/u/28903840?s=400&u=b98b20f944a62da00dbd4881e8078744307ae62c&v=4', 
            places:3
        }
    ];

    return (<UsersList items={USERS} />);
}

export default Users;