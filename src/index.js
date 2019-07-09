import React from "react"
import { render } from "react-dom"
import { HashRouter, Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import FormsEmail from './FormsEmail'
import Report from './report'


const App = () => (
  <HashRouter> {/* envolvemos nuestra aplicación en el Router  */}
    <Switch> {/* también la envolvemos en el componente Switch */}
      <Route path="/" component={FormsEmail} exact /> {/* y creamos nuestras rutas */}
      <Route path="/reports" component={Report} exact />
    </Switch>
  </HashRouter>
)

render(<App />, document.getElementById("root"))




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
