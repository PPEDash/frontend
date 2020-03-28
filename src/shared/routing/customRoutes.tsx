import React, { SFC } from 'react';
import { RouterProps, Route, Redirect } from 'react-router';

export const PrivateRoute: SFC<RouterProps> = ({ component, ...rest }: any) => (
    <Route
        {...rest}
        // render={(renderProps) => (
        //     !!auth.currentUser ? (
        //         React.createElement(component, renderProps)
        //     ) : (
        //             React.createElement(Redirect, {
        //                 to: "/login"
        //             })
        //         )
        // )
        // }

    />
)