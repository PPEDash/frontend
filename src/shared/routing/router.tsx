import { Switch, Route } from 'react-router'
import { LandingPage } from '../../pages/landing/landingPage';
import React from 'react'
import { MarketplacePage } from '../../pages/marketplace/marketplacePage';
import { FormPage } from '../../pages/form/formPage';
import { Box } from '@chakra-ui/core';
import { MakerStartPage } from '../../pages/makers/makerStartPage';


export const Router = () => {
    return (
        // <Box background="#B2F5EA">
<Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/market" component={MarketplacePage}/>
            <Route path="/marketplace" component={MarketplacePage}/>
            <Route path="/makers" component={MakerStartPage} />
            <Route path="/create" component={FormPage} />
        </Switch>
        // </Box>
        
    )
}
