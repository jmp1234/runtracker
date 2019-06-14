import React from 'react';

const GuestLoginForm = props => {
    const { guestLogin } = props;
    return (
        <form>
            <button onClick={guestLogin} className="loginButton btn btn-info">Guest</button>
        </form>
    )
}

export default GuestLoginForm;
