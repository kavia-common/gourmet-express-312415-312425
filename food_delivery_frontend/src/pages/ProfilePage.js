import React from "react";
import { Link } from "react-router-dom";

// PUBLIC_INTERFACE
export default function ProfilePage() {
  /** User profile page placeholder. */
  return (
    <>
      <h1>Profile</h1>
      <p className="muted">Placeholder profile page (account details, addresses, etc.).</p>
      <div style={{ marginTop: 14 }}>
        <Link className="btn" to="/login">
          Login (placeholder)
        </Link>
      </div>
    </>
  );
}
