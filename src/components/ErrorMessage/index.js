import React from 'react';
import {useHistory} from 'react-router-dom';
import './../helpers/commonStyle.scss';

export const ErrorMessage = ({message}) => {
    const history = useHistory();
    const redirectToLogin = () => {
        history.push('/Login');
    };
    return <><div className="alert alert-danger">
        {message}
    </div>
        <div className={'info'}>
            <h1>Go to login</h1>
            <button className={'btn btn-primary'} onClick={redirectToLogin}>Redirect to login</button>
        </div>
    </>;
};