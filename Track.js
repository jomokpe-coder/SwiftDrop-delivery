import React from 'react';
export default function Track(){
  const tracking = 'SD202511260983';
  return (
    <div className="container" style={{textAlign:'center',paddingTop:24}}>
      <h1>Track Your Package</h1>
      <p style={{fontWeight:700}}>{tracking}</p>
      <div className="card" style={{display:'inline-block',textAlign:'left',marginTop:12}}>
        <p><strong>Status:</strong> In Transit</p>
        <p><strong>Last Location:</strong> SwiftDrop Hub — Processing Center</p>
        <p><strong>ETA:</strong> Within 24 hours</p>
      </div>
    </div>
  );
}
