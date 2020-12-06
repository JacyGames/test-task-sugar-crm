import React from 'react';
import {isEmpty} from '../../helpers/pipe';
import './../../helpers/commonStyle.scss';
import {pipingString} from '../../helpers/stringPipe';

const struct = [
    'name', 'lead_source', 'result_type_c', 'quality_assurance_c', 'opportunity_status_c', 'interested_product_c', 'reset_c', 'info_c', 'not_interested_c',
    'not_interested_reason_c', 'windows_c', 'roofing_c', 'gutters_c', 'siding_c', 'doors_c', 'appointment_date_c', 'info_reasons_c', 'on_hold_c', 'on_hold_reason_c'
];

export const OpportunitiesView = ({data,setEdit}) => {
    return <>
        <div className='footerSubmit'>
            <button className={'btn btn-primary mr-2'} onClick={() => {
                setEdit(true);
            }}>Edit</button>
        </div>
        <table className="table table-hover">
            <tbody>
            {struct.map((item,i) => {
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
