import React, {useState} from 'react';
export default function Home(){
  const [tn, setTn] = useState('');
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-left">
          <h1>SwiftDrop Delivery — Fast. Reliable. Right to Your Door.</h1>
          <p>Professional same-day, express, and scheduled deliveries. Track in real-time and get live updates.</p>
          <div className="quick-actions">
            <a className="cta-btn" href="/track">Track a Package</a>
            <a className="whatsapp" href="https://wa.me/1234567890?text=Hello%20SwiftDrop" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
          </div>

          <div style={{marginTop:20}}>
            <form onSubmit={(e)=>{e.preventDefault(); if(tn) window.location.href='/track';}}>
              <div className="track-form">
                <input className="input" placeholder="Enter tracking number (e.g. SD202511260983)" value={tn} onChange={e=>setTn(e.target.value)} />
                <button className="cta-btn" type="submit">Track</button>
              </div>
            </form>
          </div>
        </div>
        <div className="hero-right">
          <img src="%PUBLIC_URL%/logo-swiftdrop.png" alt="SwiftDrop" style={{maxWidth:360}} />
        </div>
      </section>

      <section style={{marginTop:24}}>
        <div className="services">
          <div className="card"><h3>Parcel Delivery</h3><p>Secure handling for parcels of all sizes.</p></div>
          <div className="card"><h3>Same-Day Delivery</h3><p>Quick deliveries in your city.</p></div>
          <div className="card"><h3>Express Courier</h3><p>Fast courier services for urgent items.</p></div>
          <div className="card"><h3>Scheduled Drops</h3><p>Plan your delivery at a time that suits you.</p></div>
        </div>
      </section>
    </div>
  );
}
