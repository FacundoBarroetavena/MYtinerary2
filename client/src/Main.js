import React from 'react';
import './App.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import HomeContainer from './containers/HomeContainer/HomeContainer';
import FooterComponent from './components/FooterComponent/FooterComponent';
import ProfileAndHamburguerContainer from './containers/ProfileAndHamburguerContainer/ProfileAndHamburguerContainer';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer/LoginContainer'
import CityContainer from './containers/CityContainer/CityContainer';
import SearchCitiesContainer from './containers/SearchCitiesContainer/SearchCitiesContainer';
import AddCityComponent from './components/AddCityComponent/AddCityComponent'
import CityItinerariesContainer from './containers/CityItinerariesContainer/CityItinerariesContainer';
import AddItinerary from './components/AddItineraryComponent/AddItinerary';
import CreateAccountContainer from './containers/CreateAccountContainer/CreateAccountContainer';

class Main extends React.Component {


  render() {

    return (
      <div>
        <Route component={ProfileAndHamburguerContainer} />
        <div className="App">
          <Route component={NavbarComponent} />
          <Switch>
            <Route path='/index' component={HomeContainer} />
            <Route path='/login' component={LoginContainer} />
            <Route path='/create-account' component={CreateAccountContainer} />
            <Route path='/cities/:id' component={CityContainer} />
            <Route path='/search' component={SearchCitiesContainer} />
            <Route path='/add-city' component={AddCityComponent}/>
            <Route exact path='/itineraries/add' component={AddItinerary}/>
            <Route exact path='/itineraries/:city_name' component={CityItinerariesContainer}/>
          </Switch>
          <Route component={FooterComponent} />
          <Redirect exact from="/" to="/index" />
        </div>
      </div>
    );
  }
}

export default Main;
