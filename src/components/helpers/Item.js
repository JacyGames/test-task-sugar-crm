import React, {useEffect, useState} from 'react';
import {useFetchData} from '../hooks/useFetchData';
import {Loader} from '../Loader';
import {ErrorMessage} from '../ErrorMessage';
import {OpportunitiesForm} from '../Opportunities/OpportunitiesForm';
import {OpportunitiesView} from '../Opportunities/OpportunitiesView';

export const Item = ({token, navSelect, id}) => {
    const [isDataRefreshed, setDataRefresh] = useState(false);
    const [data, message] = useFetchData(token, navSelect, id, isDataRefreshed);

    const [isFetching, setIsFetching] = useState(false);
    const [edit, setEdit] = useState(false);
    useEffect(() => {
        if(message) {
            setIsFetching(false);
        }
        if (data === null) {
            setIsFetching(true);
        }else {
            setIsFetching(false);
        }
    }, [data,message]);
    return <>
        {isFetching ? <div className={'loaderCenter'}>
            <Loader />
        </div> : (message ? <ErrorMessage message={message} /> : (
            edit ? <OpportunitiesForm str={navSelect} id={id} token={token} setEdit={setEdit} data={data} setDataRefresh={setDataRefresh}/> : <OpportunitiesView data={data} setEdit={setEdit}/>
        ))}
    </>;
};