import React, {useState} from 'react';
import {ApiService} from '../../api/api';
import {Loader} from '../Loader';
import {useHistory} from 'react-router-dom';
import './style.scss';

export const Login = ({setToken}) => {
    const api = new ApiService();
    const history = useHistory();
    const [fetching, setFetching] = useState(false);
    const Auth = () => {
        setFetching(true);
        api.logIn().then(resp => {
            if(resp.access_token) {
                setToken(resp.access_token);
                history.push('/');
            }else {
                setToken(null);
                setFetching(false);
            }
        });
    };
    return <div className={'main'}>
        <div className={'info'}>
            <h1>Login</h1>
            <p>You need to get access token for obtaining data</p>
        </div>
        <div className={'container'}>
            {!fetching ? <button onClick={Auth} disabled={fetching} className={'btn btn-primary'}>Login to page</button> : <Loader />}
        </div>
        {fetching && <p className={'centered'}>
            Please wait it may take a while
        </p>}
    </div>;
};
