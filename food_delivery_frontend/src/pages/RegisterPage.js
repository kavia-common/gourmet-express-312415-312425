import React from "react";
import { Link } from "react-router-dom";

// PUBLIC_INTERFACE
export default function RegisterPage() {
  /** Register page placeholder. */
  return (
    <>
      <h1>Register</h1>
      <p className="muted">Placeholder registration screen.</p>
      <p style={{ marginTop: 12 }}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </>
  );
}
