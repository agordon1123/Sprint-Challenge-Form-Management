import React from 'react';

const UserCard = (props) => {
    console.log(props.props)
    return(
        <div className='user-list'>
            {Object.values(props.props).map(user => {
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
