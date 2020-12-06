import React from 'react';
import './../../helpers/commonStyle.scss';

import {FormView} from '../../helpers/FormCustom';

const editFields = [
  'name', 'result_type_c', 'quality_assurance_c', 'opportunity_status_c',
    'interested_product_c', 'reset_c', 'info_c', 'not_interested_c', 'not_interested_reason_c',
    'windows_c', 'roofing_c', 'gutters_c', 'siding_c', 'doors_c', 'appointment_date_c',
    'info_reasons_c', 'on_hold_c', 'on_hold_reason_c'
];

export const OpportunitiesForm = ({str, id, token, setEdit, data, setDataRefresh}) => {
   return <FormView str={str} id={id} token={token} setEdit={setEdit} data={data} editFields={editFields} setDataRefresh={setDataRefresh} />;
};


