import React from "react";
import { Link } from "react-router-dom";

// PUBLIC_INTERFACE
export default function CartPage() {
  /** Cart page placeholder. */
  return (
    <>
      <h1>Cart</h1>
      <p className="muted">Placeholder cart page.</p>
      <div style={{ marginTop: 14 }}>
        <Link className="btn btn-primary" to="/orders">
          Proceed to orders
        </Link>
      </div>
    </>
  );
}
