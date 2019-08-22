import { h, Component } from "preact";
import { Router } from "preact-router";
import { Provider } from "unistore/preact";
import store from "../store";

import Header from "./header";

// Code-splitting is automated for routes
import Task from "../routes/task";

import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <Provider store={store}>
        <div
          class="container-fluid"
          style={{
            background: "#fefefe",
            minHeight: "100vh",
            height: "100%"
          }}
        >
          <div className="row">
            <div className="col-md-4" />
            <div
              className="col-md-4"
              style={{
                background: "#fff",
                minHeight: "100vh",
                height: "100%",
                boxShadow: "0 1px 10px 5px rgba(0,0,0,0.05)"
              }}
            >
              <Header />
              <Router onChange={this.handleRoute}>
                <Task path="/" />
              </Router>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}
