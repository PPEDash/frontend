import React from 'react';
import { RouterProps, Route, Redirect } from 'react-router';
export const PrivateRoute: SFC<RouteProps> = ({ component, ...rest }: any) => (
    <Route
        {...rest}
        render={(renderProps) => (
            !!auth.currentUser ? (
                React.createElement(component, renderProps)
            ) : (
                    React.createElement(Redirect, {
                        to: "/login"
                    })
                )
        )
        }

    />
)