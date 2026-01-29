import React from "react";
import { Link } from "react-router-dom";

// PUBLIC_INTERFACE
export default function NotFoundPage() {
  /** Fallback 404 page. */
  return (
    <>
      <h1>Not found</h1>
      <p className="muted">This page does not exist.</p>
      <div style={{ marginTop: 14 }}>
        <Link className="btn btn-primary" to="/">
          Go home
        </Link>
      </div>
    </>
  );
}
