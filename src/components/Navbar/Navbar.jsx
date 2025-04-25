import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">Hack@UCI</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <details>
              <summary>Committees</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>Logistics</a>
                </li>
                <li>
                  <a>Tech</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;