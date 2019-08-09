import React from 'react';
import UserCard from './UserCard';

const UserList = (props) => {
    console.log(props.props[0])
    return (
        <div>
            <UserCard props={props} />
        </div>
    )
}

export default UserList;