import React, { Fragment } from 'react';
//import { BrowserRouter, Route } from 'react-router-dom'

import Intro from './Intro'
import NavBar from './NavBar'
import About from './About'

const Routes = () => {
    return (
        <Fragment>
            {/* <BrowserRouter>
             <Fragment>
                 <Route path="/" component={Introduction}/>
             </Fragment>
            </BrowserRouter> */}
            <NavBar/>
            <Intro/>
            <About/>
        </Fragment> 
    )
}

 export default Routes