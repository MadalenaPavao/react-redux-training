import React from 'react';

const User = (user) => {
    const {name, username, email} = user.user
    return (
        <div className="userCard">
            <h3>{ name + ' ' + username }</h3>
            <h3>{ email }</h3>
        </div>
    )
}
export default User