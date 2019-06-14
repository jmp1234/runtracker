import React, { Component, Fragment } from 'react';
import './run_map.scss';
import { Route } from 'react-router-dom';
import RunStats from './run_stats';
import RunMap from './run_map';


class RunRoute extends Component {

    render() {
        const { url, path, params, isExact } = this.props.match;

        return (
            <Fragment>
                <Route path="/runmap" exact component={RunMap} />
                <Route path="/runmap/stats" component={RunStats} />
            </Fragment>
        )
    }
}

export default RunRoute;
