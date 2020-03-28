import { Switch, Route } from 'react-router'
import { LandingPage } from '../../pages/landing/landingPage';
import React from 'react'
import { LoginPage } from '../../pages/authFlow/loginPage';
import { MarketplacePage } from '../../pages/marketplace/marketplacePage';
import { MakerDashboardPage } from '../../pages/makers/makerDashboardPage';
import { PrivateRoute } from './customRoutes';
import { FormPage } from '../../pages/form/formPage';


export const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/market" component={MarketplacePage}/>
            <Route path="/create" component={FormPage} />
        </Switch>
    )
}
