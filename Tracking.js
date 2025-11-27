import React, {useState} from 'react';

export default function Tracking(){
  const [code, setCode] = useState('');
  const [result, setResult] = useState(null);
  function check(){ setResult('Package is in transit.'); }
  return (
    <div className="page container">
      <h1>Track Package</h1>
      <input value={code} onChange={e=>setCode(e.target.value)} placeholder="Enter tracking number" />
      <button onClick={check} className="primary-btn" style={{marginLeft:10}}>Track</button>
      {result && <p style={{marginTop:12}}>{result}</p>}
    </div>
  );
}
