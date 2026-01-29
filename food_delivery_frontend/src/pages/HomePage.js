import React from "react";
import { Link } from "react-router-dom";

// PUBLIC_INTERFACE
export default function HomePage() {
  /** Landing page placeholder. */
  return (
    <>
      <h1>Home</h1>
      <p className="muted">
        Welcome to Gourmet Express. This is placeholder content while we build features.
      </p>

      <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link className="btn btn-primary" to="/restaurants">
          Browse restaurants
        </Link>
        <Link className="btn" to="/cart">
          View cart
        </Link>
        <Link className="btn" to="/orders">
          View orders
        </Link>
      </div>
    </>
  );
}
