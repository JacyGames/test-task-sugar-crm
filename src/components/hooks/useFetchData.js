import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {ApiService} from '../../api/api';

export const useFetchData = (token,navSelect,id, isDataRefreshed) => {
    const history = useHistory();
    const api = new ApiService();
    const [data, setData] = useState(null);
    const [message, setMessage] = useState(null);
    useEffect(() => {
        if(token === null) {
            history.push('/Login');
        }else {
            api.getData(navSelect,id,token).then(resp => {
                if(resp.error_message) {
                    setMessage(resp.error_message);
                }
                setData(resp);
            });
        }
    },[isDataRefreshed]);
    return [data, message];
};
