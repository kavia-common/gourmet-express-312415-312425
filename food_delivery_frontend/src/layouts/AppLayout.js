import React from "react";
import { Link, NavLink, Outlet, useNavigate, useSearchParams } from "react-router-dom";

// PUBLIC_INTERFACE
export default function AppLayout() {
  /** Top-level application layout with navbar, content area, and cart drawer placeholder. */
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const q = searchParams.get("q") ?? "";

  return (
    <div className="app-shell">
      <header className="navbar" role="banner">
        <div className="container navbar-inner">
          <Link to="/" className="brand" aria-label="Go to home">
            <span className="brand-badge">G</span>
            <span>Gourmet Express</span>
          </Link>

          <div className="search" role="search">
            <span className="muted" aria-hidden="true">
              ⌕
            </span>
            <input
              placeholder="Search restaurants (placeholder)"
              value={q}
              onChange={(e) => {
                const next = e.target.value;
                const params = new URLSearchParams(searchParams);
                if (next) params.set("q", next);
                else params.delete("q");
                navigate({ pathname: window.location.pathname, search: params.toString() });
              }}
              aria-label="Search"
            />
          </div>

          <nav className="nav-actions" aria-label="Primary">
            <NavLink className="btn" to="/restaurants">
              Restaurants
            </NavLink>
            <NavLink className="btn" to="/orders">
              Orders
            </NavLink>
            <NavLink className="btn" to="/profile">
              Profile
            </NavLink>
            <NavLink className="btn btn-primary" to="/login">
              Login
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="main" role="main">
        <div className="container main-inner">
          <section className="card page" aria-label="Content">
            <Outlet />
          </section>

          <aside className="card cart-drawer" aria-label="Cart drawer">
            <div className="cart-drawer-title">
              <strong>Cart</strong>
              <span className="pill">Drawer placeholder</span>
            </div>
            <div className="muted" style={{ fontSize: 14, lineHeight: 1.5 }}>
              Cart UI will appear here. For now, use the <Link to="/cart">Cart</Link> page.
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
