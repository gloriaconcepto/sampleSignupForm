import React from "react";
import { Switch, Route} from "react-router-dom";
import {LANDINGPAGE} from './constants/constants';
import ManageLogin from '../Components/login/ManageLogin'

const Routes = (props) => {
   
    return (
        <div>
            <Switch>
                <div className={"container__wrap"}>
                     <Route exact={true} path={LANDINGPAGE} component={ManageLogin} />
                </div>
            </Switch>
        </div>
    );
};
export default Routes
