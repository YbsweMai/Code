import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
export default function B() {
    return (
        <div>
            B

            <ul>
                <li>
                    <Link to='/b/index'>home</Link>
                </li>

                <li>
                    <Link to='/b/helloworld'>helloworld</Link>
                </li>
            </ul>
            
            <Switch>

                <Route path='/b/index'>
                    <div>b home</div>
                </Route>

                <Route path='/b/helloworld'>
                    <div>b helloworld</div>
                </Route>
            </Switch>
        </div>
    )
}
