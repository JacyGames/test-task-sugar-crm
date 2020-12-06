import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {ApiService} from '../../api/api';
import {Loader} from '../Loader';
import {pipingString} from './stringPipe';
import './commonStyle.scss';

export const FormView = ({str, id, token, setEdit, data, editFields, setDataRefresh}) => {
    const { register, handleSubmit } = useForm();
    const [currentData, setCurrentData] = useState(data);
    const apiService = new ApiService();
    const [isFetching, setIsFetching] = useState(false);
    const submit = (obj) => {
        setIsFetching(true);
        apiService.editData(str,id,token,obj).then((item) => {
            setCurrentData(item);
            setIsFetching(false);
            setDataRefresh(prevState => !prevState);
        },(err) => console.log(err));
    };
    return <div>
        {isFetching ? <div className={'loaderCenter'}>
            <Loader />
        </div> : <> <div className={'footerSubmit'}>
            <button className="btn btn-primary" onClick={() => {setEdit(false);}}>Save</button>
        </div>
            <form onSubmit={handleSubmit(submit)}>
                <FormCustom data={currentData} register={register} editFields={editFields}/>
                <div className={'footerSubmit'}>
                    <button className={'btn btn-success'} type={'submit'}>Submit</button>
                </div>
            </form> </>}
    </div>;
};

const FormCustom = ({data, register, editFields}) => {
    return <>{editFields.map((item,i) => {
        if(typeof data[item] === 'boolean') {
            return <div className="form-group" key={i}>
                <div className="text-center">
                    <label className="capitalize" htmlFor={item}>{pipingString(item)}</label>
                </div>
                <input className="form-control" id={item}
                       aria-describedby="emailHelp" type="checkbox" defaultChecked={data[item]} name={item} ref={register}/>
            </div>;
        }else {
            return <div className="form-group" key={i}>
                <div className="text-center">
                    <label htmlFor={item} className={'capitalize'}>{pipingString(item)}</label>
                </div>
                <input className="form-control" id={item}
                       aria-describedby="emailHelp" type="text" defaultValue={data[item]} name={item} ref={register}/>
            </div>;
        }

    })}</>;
};