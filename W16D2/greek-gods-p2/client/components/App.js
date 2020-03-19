import React from "react";
import GodsList from "./gods/GodsList";
import { Route, Switch } from "react-router-dom";
import GodCreate from "./create/GodCreate"
import AbodeCreate from "./create/AbodeCreate";
import EmblemCreate from "./create/EmblemCreate";
import Create from "./create/Create";
import NavBar from "./nav/NavBar";
import GodDetail from "./gods/GodDetail";

const App = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/gods/:id" component={GodDetail} />
                <Route exact path="/" component={GodsList} />
                <Route exact path="/gods/new" component={GodCreate} />
                <Route exact path="/abodes/new" component={AbodeCreate} />
                <Route exact path="/emblems/new" component={EmblemCreate} />
                <Route exact path="/new" component={Create} />
            </Switch>
        </div>
    );
};

export default App;