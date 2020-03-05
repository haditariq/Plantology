import React, {Component} from 'react';
import Dashboard from './Screens/Dashboard/Dashboard';
import Register from './Screens/Auth/Register/Register';
import Login from './Screens/Auth/Login/Login';
import ForgotPassword from './Screens/Auth/ForgetPassword/ForgotPassword';
import Profile from './Screens/Profile/Profile';
import Collections from './Screens/Collection/Collections';
import Account from './Screens/Profile/Account/Account';
import Nav from './Components/Header/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PlantDetail from './Screens/PlantDetail/PlantDetail';
import reload from './Assets/reload.png';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      loggedIn: localStorage.getItem('USER')
    };
  }

  getValue = e => {
    this.setState({query: e.target.value}, () => {
      if (e && e.target) {
        this.dashboardRef.flowerFilter();
      }
    });
  };

  reloadLocal = async () => {
    let val = await localStorage.getItem('USER');
    if (val === 'true') {
      val = false;
      this.setState({loggedIn: 'false'});
      alert('You are about to logged out now.');
    } else {
      val = true;
      this.setState({loggedIn: 'true'});
      alert('You are about to login now.');
    }
    await localStorage.setItem('USER', val);
    window.location.reload();
  };

  render() {
    return (
      <Router>
        <div style={{height: '100%'}}>
          <button onClick={async () => {
            await this.reloadLocal();
          }} className="changeLocal"
                  style={this.state.loggedIn !== 'true' ? {backgroundColor: 'grey'} : {backgroundColor: '#4a90e2'}}>
            <img src={reload} alt="" style={{height: 15, width: 15}}/>
          </button>
          <Nav onQuery={this.getValue}/>
          <Switch>
            <Route
              path="/"
              exact
              component={() => (
                <Dashboard
                  queryValue={this.state.query}
                  ref={ref => (this.dashboardRef = ref)}
                />
              )}
            />
            <Route path="/register" exact component={Register}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/forgot-password" exact component={ForgotPassword}/>
            <Route path="/profile" exact component={Profile}/>
            <Route path="/collections" exact component={Collections}/>
            <Route path="/account" exact component={Account}/>
            <Route path="/plant-detail/:_id" component={PlantDetail}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
