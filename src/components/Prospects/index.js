import React from 'react';
import {useHistory} from 'react-router-dom';
import './../helpers/commonStyle.scss';

const idItem = ['bf4b665a-e8a5-11ea-81a4-0e8a2d283465', 'a0ZF000000702iS'];

export const Prospects = ({setId}) => {
    const history = useHistory();
    const selectItem = (idItem) => () => {
        setId(idItem);
        history.push(`/Leads/${idItem}`);
    };
    return <>
        <div className={'info'}>
            <h1>Choose id</h1>
        </div>
        <table className="table table-hover">
        <tbody>
        {idItem.map((item,i) => {
            return <tr key={i} onClick={selectItem(item)}>
                <td className={'item'}>{item}</td>
            </tr>;
        })}
        </tbody>
    </table></>;
};
