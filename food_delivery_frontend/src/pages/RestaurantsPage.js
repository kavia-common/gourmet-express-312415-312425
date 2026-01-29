import React from "react";
import { Link } from "react-router-dom";

// PUBLIC_INTERFACE
export default function RestaurantsPage() {
  /** Restaurant list page placeholder. */
  return (
    <>
      <h1>Restaurants</h1>
      <p className="muted">Placeholder restaurant listing.</p>

      <div style={{ marginTop: 14, display: "grid", gap: 10 }}>
        <div className="card" style={{ padding: 12 }}>
          <strong>Example Restaurant</strong>
          <div className="muted" style={{ fontSize: 14, marginTop: 6 }}>
            This is a placeholder card.
          </div>
          <div style={{ marginTop: 10 }}>
            <Link className="btn btn-primary" to="/restaurants/1">
              View menu
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
