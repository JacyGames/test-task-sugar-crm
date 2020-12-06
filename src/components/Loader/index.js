import React from 'react';
import './style.scss';

export const Loader = () => {
    const arr = Array(8).fill(1);
    return <>
        <div className="lds-roller">
            {arr.map((item,i) => <div key={i}/>)}
        </div>
    </>;
};
