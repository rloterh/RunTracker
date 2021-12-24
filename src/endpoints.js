import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SprintList from './containers/SprintList';
import TrackSprint from './components/TrackSprint';
import SingleSprint from './containers/SingleSprint';
import Progress from './components/Progress';
import UpdateSprint from './components/UpdateSprint';
import Settings from './components/Settings';

const Endpoints = () => (
  <Switch>
    <Route path="/sprints/:sprint" exact component={SingleSprint} />
    <Route path="/sprints/:sprint/edit" exact component={UpdateSprint} />
    <Route path="/feed" exact component={SprintList} />
    <Route path="/" exact component={TrackSprint} />
    <Route path="/progress" exact component={Progress} />
    <Route path="/settings" exact component={Settings} />
    <Redirect to="/" />
  </Switch>
);

export default Endpoints;
