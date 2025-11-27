import React from 'react';

export default function Home(){
  return (
    <div className="page container">
      <h1>Welcome to SwiftDrop Delivery</h1>
      <p>Fast • Reliable • Secure</p>

      {/* Existing button (Delivery Page) */}
      <a className="primary-btn" href="/delivery">
        Go to Delivery Page
      </a>

      {/* NEW Google Form Button */}
      <a
        className="primary-btn"
        href="https://docs.google.com/forms/d/e/1FAIpQLScV2OkbcHexdx8EdxIh7WQX3UvXV0MHuWom7GW9PR3wsvCCdQ/viewform?embedded=true"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginTop: "20px", display: "inline-block" }}
      >
        Fill Delivery Form
      </a>
    </div>
  );
}
