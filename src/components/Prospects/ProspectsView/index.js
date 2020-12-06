import React from 'react';
import {isEmpty} from '../../helpers/pipe';
import './../../helpers/commonStyle.scss';
import {pipingString} from '../../helpers/stringPipe';

const fields = [
    'name', 'phone_home', 'phone_mobile', 'phone_work', 'phone_other', 'primary_address_street',
    'primary_address_city', 'primary_address_state', 'primary_address_postalcode'
];

export const ProspectsView= ({data,setEdit}) => {
    return <>
        <div className='footerSubmit'>
            <button className='btn btn-primary mr-2' onClick={() => setEdit(true)}>Edit</button>
        </div>
        <table className="table table-hover">
            <tbody>
            {fields.map((item,i) => {
                if(data){
                    return <tr key={i}>
                        <td className='capitalize'>{pipingString(item)}</td>
                        <td>{typeof data[item] === 'boolean' ? <input type="checkbox" checked={data[item]} disabled/> : isEmpty(data[item])}</td>
                    </tr>;
                }
            })}
            </tbody>
        </table>
    </>;
};
