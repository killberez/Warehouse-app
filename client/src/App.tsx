import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./pages/MainPage/mainPage";
import CargoForm from "./pages/CargoForm/CargoForm";
import Cargos from "./pages/Cargos/Cargos";
import Customer from "./pages/Customer/Customer";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/cargos">
            <Cargos />
          </Route>
          <Route exact path="/cargoform">
            <CargoForm />
          </Route>
          <Route exact path="/customer">
            <Customer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
