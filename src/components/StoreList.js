import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class StoreList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  render() {
		const liststore = this.props.stores.map((store)=>
			<div>{`${store.id}: `}

				<Link to='/storePage' onClick = {() => this.props.handleClick(store)}>{store.name}</Link>
				<div> website: {store.website_url}</div>
				<div>address: {store.address}</div>
				<br></br>
			</div>
		);

		return(
		  <div>
				<h1>SmoothCommerce Challenge</h1>
		    <h4> Top stores </h4>
		    <b>There are {this.props.stores.length} stores:</b>
		    <br />
		    {liststore}
		  </div>
		)
  }
}

export default StoreList;
