import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import WorkflowContainer from '../containers/WorkflowContainer';
import PhonebookContainer from '../containers/PhonebookContainer';

const MainRouter = () => {
    return (
        <main>
            <Switch>
                <Route path='/' exact component={WorkflowContainer} />
                <Route path='/phonebook' component={PhonebookContainer} />
            </Switch>
        </main>
    )
}

export default MainRouter;