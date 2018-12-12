import React from 'react';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StorePage from './components/StorePage.js';
import StoreList from './components/StoreList.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.getStoreInfo = this.getStoreInfo.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      stores: [],
      chosenStore:''
    }
  }

  componentDidMount() {
    this.getStoreInfo()
  }

  getStoreInfo() {
    var url = 'https://api.myjson.com/bins/87ohp';
    var success = (data) => {
      this.setState({stores:data.places})
    };
    $.ajax({
      type: "GET",
      url: url,
      success: success,
      dataType: "json"
    });
  }

  handleClick(storeInfo){
    this.setState({chosenStore: storeInfo})
  }

  render () {
    return(
      <div>
      <Router>
        <div>
          <Route exact path="/" render = {() => <StoreList stores={this.state.stores} handleClick = {this.handleClick}/>} />
          <Route path="/storePage" render = {() => <StorePage chosenStore={this.state.chosenStore}/>} />
        </div>
      </Router>
      </div>
    )
  }
}

export default App;
