import React from 'react';

const Storepage = ({ chosenStore }) => {

  const hourRanges = []
  for(let hour in chosenStore.hours){
    hourRanges.push(<div> {`${hour}: ${chosenStore.hours[hour]}`} </div>)
  }

	return(
	  <div>
       <img src={`${chosenStore.logo_url}`} width="500" height="333"/>
       <div class>Business Name: {chosenStore.name}</div>
       <div>Addresss: {chosenStore.address}</div>
       <div>Website: {chosenStore.website_url}</div>
       <div>Hours: {hourRanges}</div>
	  </div>
	)
}

export default Storepage
