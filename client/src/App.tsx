import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import MainPage from "./pages/mainPage/mainPage";
import CargoPage from "./pages/cargoPage/cargoPage";
import WorkerPage from "./pages/workerPage/workerPage";
import CustomerPage from "./pages/customerPage/customerPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/cargo/:id">
          <CargoPage />
        </Route>
        <Route exact path="/worker">
          <WorkerPage />
        </Route>
        <Route exact path="/customer">
          <CustomerPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
