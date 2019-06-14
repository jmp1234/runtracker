import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountRoutes from './account';
import Runs from './runs/runs';
import TotalStats from './total_stats';
import Table from './total_stats/table';
import ApiTest from './api_test';
import RunRoute from './run_map';
import Login from './account/login/login';
import Logout from './account/logout/logout';
import Signup from './account/sign_up/sign_up';
import AboutUs from './about_us/aboutus';
import MapNav from './nav_folder/map_nav';
import NotFound from './404/404';
import auth from '../hoc/auth';
import RunResult from './run_results/run_results';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExclamationCircle, faFire, faClock, faRoad, faStopwatch, faChevronRight, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
library.add(faExclamationCircle, faFire, faClock, faRoad, faStopwatch, faChevronRight, faAngleDoubleLeft, faAngleDoubleRight)


const App = (props) => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={auth(Runs)} />
        <Route path="/runmap" component={RunRoute} />
        <Route path="/results/:id" component={RunResult} />
        <Route path="/totalstats" component={auth(TotalStats)} />
        <Route path="/table" component={auth(Table)} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/account" component={AccountRoutes} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  )
};

{/* <ApiTest/> */ }
export default App;
