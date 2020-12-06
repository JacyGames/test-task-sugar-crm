import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.scss';
import {Navigation} from './components/Navigation';
import {useState} from 'react';
import {Intro} from './components/Intro';
import {Opportunities} from './components/Opportunities';
import {Prospects} from './components/Prospects';
import {Login} from './components/Login';
import {OpportunitiesItem} from './components/Opportunities/OpportunitiesItem';
import {ProspectsItem} from './components/Prospects/ProspectsItem';

function App() {
    const [navSelect, setNavSelect] = useState('Calls');
    const [token, setToken] = useState(null);
    const [id, setId] = useState('');
    return (
        <div className={'app'}>
            <BrowserRouter>
            <Navigation navSelect={navSelect} setNavSelect={setNavSelect}/>
                <Switch>
                    <Route exact path={'/'}>
                        <Intro />
                    </Route>
                    <Route exact path={'/Opportunities'}>
                        <Opportunities setId={setId}/>
                    </Route>
                    <Route exact path={'/Opportunities/:id'}>
                        <OpportunitiesItem token={token} navSelect={navSelect} id={id}/>
                    </Route>
                    <Route exact path={'/Leads'}>
                        <Prospects setId={setId}/>
                    </Route>
                    <Route exact path={'/Leads/:id'}>
                        <ProspectsItem token={token} navSelect={navSelect} id={id} />
                    </Route>
                    <Route path={'/Login'}>
                        <Login setToken={setToken}/>
                    </Route>
                </Switch>

            </BrowserRouter>
        </div>
    );
}

export default App;
