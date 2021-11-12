import "./App.css";

import Home from "./components/Home";

import { Switch, Route, withRouter } from "react-router-dom";
import { AccountBox } from "./components/accountBox";
import CreateAccount from "./components/accountBox/CreateAccount";
import SubCategory from "./components/SubCategory";
import ItemDetailed from "./components/ItemDetailed";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={AccountBox} />
        <Route path="/subcategory" component={SubCategory} />
        <Route path="/item" component={ItemDetailed} />
      </Switch>
    </div>
  );
}

export default App;
