import React, { useState, useEffect } from "react";

function Subscription({ useData, setUseData }) {
  const [email, setEmail] = useState("");

  const newEmail = () => {
    fetch("https://demoapi.com/api/series/newsletter", {
      method: "POST",
      body: JSON.stringify({
        email: email,
      }),
      headers: { "Content-Type": "application/json" },
    })
  };

  return (
    <div>
      <h1>Subscribe to our newsletter</h1>

      <input
        type='email'
        name='email'
        placeholder='type your e-mail address here'
        pattern='[@][.]'
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <button
      type="submit"
      disabled={!(email.includes('@') && email.includes('.'))}  // Miért kell zárójel?
        onClick={() => {
          newEmail();
        }}
      >
        Send
      </button>
    </div>
  );
}

export default Subscription;
