import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import './../helpers/commonStyle.scss';

const navs = [
    'Leads', 'Opportunities'
];

export const Navigation = ({navSelect, setNavSelect}) => {
    const history = useHistory();
    const setCred = (item) => (e) => {
        e.preventDefault();
        setNavSelect(item);
    };
    const goTo = (item) => () => {
        history.push(`/${item}`);
    };
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" onClick={() => {setNavSelect('home');}} to={'/'}>SugarCRM</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                {navs.map((item, i) => {
                    let active = '';
                    if(item === navSelect) {
                        active = 'active';
                    }
                    return <li key={i++} onClick={setCred(item, i)} className={`nav-item ${active} item`}>
                        <a className={'nav-link'} onClick={goTo(item)}>{item}</a>
                    </li>;})}
            </ul>
        </div>
    </nav>;
};
