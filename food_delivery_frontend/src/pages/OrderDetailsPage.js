import React from "react";
import { Link, useParams } from "react-router-dom";

// PUBLIC_INTERFACE
export default function OrderDetailsPage() {
  /** Order detail page placeholder. */
  const { id } = useParams();

  return (
    <>
      <h1>Order #{id}</h1>
      <p className="muted">Placeholder order details + tracking UI.</p>
      <div style={{ marginTop: 14 }}>
        <Link className="btn" to="/orders">
          Back to orders
        </Link>
      </div>
    </>
  );
}
