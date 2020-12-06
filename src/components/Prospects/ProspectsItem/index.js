import React, {useState, useEffect} from 'react';
import {useFetchData} from '../../hooks/useFetchData';
import {ProspectForm} from '../ProspectForm';
import {ProspectsView} from '../ProspectsView';
import {Loader} from '../../Loader';
import {ErrorMessage} from '../../ErrorMessage';
import './../../helpers/commonStyle.scss';

export const ProspectsItem = ({token, navSelect, id}) => {
    const [isDataRefreshed, setDataRefresh] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [data, message] = useFetchData(token, navSelect, id, isDataRefreshed);
    const [edit, setEdit] = useState(false);
    useEffect(() => {
        if (message) {
            setIsFetching(false);
        }
        if (data === null) {
            setIsFetching(true);
        } else {
            setIsFetching(false);
        }
    }, [data, message]);
    return <>
        {isFetching ? <div className={'loaderCenter'}>
            <Loader />
        </div> : (message ? <ErrorMessage message={message}/> : (edit ?
            <ProspectForm str={navSelect} id={id} token={token} setEdit={setEdit} data={data} setDataRefresh={setDataRefresh}/> :
            <ProspectsView data={data} setEdit={setEdit}/>))}
    </>;
};