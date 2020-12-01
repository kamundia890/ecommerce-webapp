import React, {useEffect} from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import './App.css';
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./Firebase"

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect (() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        //user logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      }else{
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return() => {
      unsubscribe();
    }
  }, []);
    console.log("User is >>>",user);
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
            <Header />
            <Checkout/>
        </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
