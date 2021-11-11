import "./App.css";
import { Switch, Route } from "react-router";
import PageAccueil from "./pages/PageAcceuil";
import PageConnection from "./pages/PageConnection";
import PageInscription from "./pages/PageInscription";

function App() {
  return (
    <Switch>
      <Route path="/" component={PageAccueil} exact />
      <Route
        path="/connection/:userID/:firstName"
        component={PageConnection}
        exact
      />
      <Route path="/inscription" component={PageInscription} exact />
    </Switch>
  );
}

export default App;
