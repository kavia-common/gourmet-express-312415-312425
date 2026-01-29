import React from "react";
import { Link } from "react-router-dom";

// PUBLIC_INTERFACE
export default function LoginPage() {
  /** Login page placeholder. */
  return (
    <>
      <h1>Login</h1>
      <p className="muted">Placeholder login screen. JWT will be stored in localStorage.</p>
      <p style={{ marginTop: 12 }}>
        Don’t have an account? <Link to="/register">Register</Link>
      </p>
    </>
  );
}
