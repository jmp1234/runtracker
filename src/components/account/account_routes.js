import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../404/404';
import LogIn from './login';
import LogOut from './logout';
import Runs from '../runs/runs';
import auth from '../../hoc/auth';

export default props => {
    const { match } = props;
    return (
        <Switch>
            <Route path={`${match.path}/login`} component={auth(LogIn, '/', false)} />
            <Route path={`${match.path}/logout`} component={auth(LogOut)} />
            <Route component={NotFound} />
        </Switch>
    )
}
