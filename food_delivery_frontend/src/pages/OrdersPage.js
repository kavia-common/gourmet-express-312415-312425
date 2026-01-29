import React from "react";
import { Link } from "react-router-dom";

// PUBLIC_INTERFACE
export default function OrdersPage() {
  /** Orders list page placeholder. */
  return (
    <>
      <h1>Orders</h1>
      <p className="muted">Placeholder orders listing.</p>

      <div style={{ marginTop: 14, display: "grid", gap: 10 }}>
        <div className="card" style={{ padding: 12 }}>
          <strong>Order #1001</strong>
          <div className="muted" style={{ fontSize: 14, marginTop: 6 }}>
            Status: Placeholder
          </div>
          <div style={{ marginTop: 10 }}>
            <Link className="btn btn-primary" to="/orders/1001">
              View details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
