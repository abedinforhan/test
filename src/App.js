import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./Component/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Component/Login/Login";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import NoMatched from "./Component/NoMatched/NoMatched";
import Destination from "./Component/Destination/Destination";
import Blog from "./Component/Blog/Blog";
import Header from "./Component/Header/Header";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div style={{ backgroundColor: "gray" }}>
        <Router>
          <Header />
          <Switch>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/blog">
              <Blog />
            </PrivateRoute>
            <PrivateRoute path="/destination/:id">
              <Destination> </Destination>
            </PrivateRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NoMatched></NoMatched>
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}
export default App;
