import React from 'react';
import {FormView} from '../../helpers/FormCustom';

const fields = [
    'name', 'phone_home', 'phone_mobile', 'phone_work', 'phone_other', 'primary_address_street',
    'primary_address_city', 'primary_address_state', 'primary_address_postalcode'
];

export const ProspectForm = ({str, id, token, setEdit, data, setDataRefresh}) => {
    return <FormView str={str} id={id} token={token} setEdit={setEdit} data={data} editFields={fields} setDataRefresh={setDataRefresh} />;
};
