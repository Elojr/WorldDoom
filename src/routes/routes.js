import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../views/Login';
import Register from '../views/Register';
import EditProfile from '../views/EditProfile';
import ForgotPassword from '../views/ForgotPassword';

import NewTest from '../views/NewTest';

import Home from '../views/Home';
import Courses from '../views/Courses';
import Subjects from '../views/Subjects';
import Teachers from '../views/Teachers';
import Project from '../views/Project';

export default function Routes() {
    return(
      <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" component={EditProfile} />
            <Route path="/forgot_password" component={ForgotPassword} />

            <Route path="/tests/new" component={NewTest} />

            <Route path="/home" exact component={Home} />
            <Route path="/courses" component={Courses} />
            <Route path="/subjects" component={Subjects} />
            <Route path="/teacher" component={Teachers} />
            <Route path="/project" component={Project} />
        </Switch>
      </BrowserRouter>
  );
}
