import React, { Component } from "react";
import HomeComponent from "../../components/HomeComponent/HomeComponent";
import { connect } from "react-redux";
import { getAllTheCities } from "../../store/action-creators/cityActions";

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      randomNums: []
    };
    this.randomNums = this.randomNums.bind(this);
  }
  
  async UNSAFE_componentWillMount() {
    await this.props.getAllCities();
    this.setState({
      data: this.props.ciudades.citiesReducer.citiesArray
    });
    await this.randomNums(12);
  }

  getRandomCities(numOfGroups){
    var arr = [];
    var temparray = [];
    var i,j;
    var groupLength;

    this.state.randomNums.forEach((i) => {
      arr.push(this.state.data.ciudadesFromRoutes[i]);
    });

    groupLength = Math.floor(arr.length / numOfGroups);
    for (i = 0, j = arr.length; i < j; i += groupLength) {
      temparray.push(arr.slice(i,i+groupLength));
    }
    
    return temparray;
  }

  randomNums(arraySize) {
    let arr = [];
    for (let i = 0; i < arraySize; ) {
      let r = Math.floor(Math.random() * 31);
      if (arr.indexOf(r) === -1) {
        arr.push(r);
        i++;
      }
    }
    this.setState({ randomNums: arr });
  }

  render() {
    return (
      <div>
        <HomeComponent cities={this.getRandomCities(3)} nums={this.state.randomNums} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ciudades: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllCities: () => dispatch(getAllTheCities())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
