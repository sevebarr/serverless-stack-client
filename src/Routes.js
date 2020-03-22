import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import Lander from "./containers/Lander";
import NotesPage from "./containers/NotesPage";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Settings from "./containers/Settings";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import NotFound from "./containers/NotFound";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default function Routes({ appProps }) {
  return (
    <Switch>
      {/* This Switch Component from React Router renders the first matching Routh that is defined within it */}
      <AppliedRoute
        path="/notes"
        exact
        component={NotesPage}
        appProps={appProps}
      />
      <UnauthenticatedRoute
        path="/login" //extension of domain to where the page will be linked
        exact //
        component={Login} //it will take you to this component
        appProps={appProps}
      />
      <UnauthenticatedRoute
        path="/signup"
        exact
        component={Signup}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/"
        exact
        component={Lander}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/settings"
        exact
        component={Settings}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/notes/new"
        exact
        component={NewNote}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/notes"
        exact
        component={NotesPage}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/notes/:id"
        exact
        component={Notes}
        appProps={appProps}
      />
      {/* Finally, catch all unmatched routes and send to the NotFound Component */}
      <Route component={NotFound} />
    </Switch>
  );
}
