import React from "react";
import { Link, useParams } from "react-router-dom";

// PUBLIC_INTERFACE
export default function RestaurantDetailsPage() {
  /** Restaurant detail page placeholder. */
  const { id } = useParams();

  return (
    <>
      <h1>Restaurant #{id}</h1>
      <p className="muted">Placeholder restaurant detail + menu browsing.</p>
      <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link className="btn" to="/restaurants">
          Back to restaurants
        </Link>
        <Link className="btn btn-primary" to="/cart">
          Go to cart
        </Link>
      </div>
    </>
  );
}
