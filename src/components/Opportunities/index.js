import React from 'react';
import {useHistory} from 'react-router-dom';
import './../helpers/commonStyle.scss';
import {pipingString} from '../helpers/stringPipe';

const items = ['5bf28a52-186b-11eb-8657-0e8a2d283465', '96728d6a-1237-11eb-92fd-0e8a2d283465'];

export const Opportunities = ({setId}) => {
    const history = useHistory();
    const selectItem = (idItem) => () => {
        setId(idItem);
        history.push(`/Opportunities/${idItem}`);
    };
    return <>
        <div className={'info'}>
            <h1>Choose id</h1>
        </div>
        <table className="table table-hover">
        <tbody>
        {items.map((item,i) => {
                return <tr key={i} onClick={selectItem(item)}>
                    <td className={'item'}>{pipingString(item)}</td>
                </tr>;
        })}
        </tbody>
    </table></>;
};
