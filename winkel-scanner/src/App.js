import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './Login.js'
import Scanner from './Scanner.js'
import Promos from './Promos.js'
import Payment from './Payment.js'

const App = props =>{

    return (
        <Router>
        <div>
          <Switch>
          <Route path="/" exact component={Login} />
            <Route path="/login" exact component={Login} />
            <Route path="/scanner/:shopName" component={Scanner} />
            <Route path="/promos/:shopName"  component={Promos} />
            <Route path="/payment" exact component={Payment} />
          </Switch>
        </div>
        </Router>
      )
}

export default App;