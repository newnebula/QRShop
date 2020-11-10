import ModeAtHome from './ModeAtHome/ModeAtHome.js';
import ModeShopping from'./ModeShopping/ModeShopping.js';
import ModeChoice from './ModeChoice/ModeChoice.js';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

const App = props =>{

    return (
      <Router>
      <div>
        <Switch>
        <Route path="/" exact component={ModeChoice} />
          <Route path="/my-promos" exact component={ModeAtHome} />
          <Route path="/shopping" exact component={ModeShopping} />
        </Switch>
      </div>
      </Router>
    )
}

export default App;
