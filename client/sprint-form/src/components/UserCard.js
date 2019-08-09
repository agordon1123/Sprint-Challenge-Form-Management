import React from 'react';

const UserCard = (props) => {
    console.log("props in UserCard", props.props)
    const userArray = Object.values(props.props);
    console.log(userArray);
    return(
        <div className='user-list'>
            {userArray.map(user => {
                return (
                    <div className='user-card'>
                        <p>Name: {user.name}</p>
                        <p>Course: {user.course}</p>
                        <p>Technique: {user.technique}</p>
                        <p>Ingredients: {user.ingredients}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default UserCard;
