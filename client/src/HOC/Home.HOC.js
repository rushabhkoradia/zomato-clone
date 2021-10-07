import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Layouts
import HomeLayout from '../Layout/Home.layout';

const HomeLayoutHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Route
            { ...rest }
            component = {(props) => (
                <HomeLayout>
                    <Component { ...rest } />
                </HomeLayout>
            )}>
        </Route>
        </>
    );
};

export default HomeLayoutHOC;