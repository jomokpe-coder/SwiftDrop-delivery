import React from 'react';

export default function Delivery(){
  return (
    <div className="page container">
      <h1>Delivery Form</h1>
      <p>Fill out the form below to schedule your shipment.</p>
      <a className="primary-btn" href="#form">Place Delivery Request</a>
      <div id="form" style={marginTop:20}>
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLScV2OkbcHexdx8EdxIh7WQX3UvXV0MHuWom7GW9PR3wsvCCdQ/viewform?embedded=true"
          title="Delivery Form"
          width="100%" height="1600" frameBorder="0" marginHeight="0" marginWidth="0"
        >
        Loading…
        </iframe>
      </div>
    </div>
  );
}
