import React from 'react';
export default function Contact(){
  return (
    <div className="container" style={{paddingTop:24}}>
      <h1>Contact Us</h1>
      <div className="card" style={{maxWidth:720}}>
        <p><strong>Email:</strong> support@swiftdrop.com</p>
        <p><strong>Phone:</strong> +123 456 7890</p>
        <p>For urgent help, chat us on WhatsApp.</p>
      </div>
    </div>
  );
}
