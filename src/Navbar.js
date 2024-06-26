import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
    const amount=useSelector(state=>state.amount)
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-3.5" style={{fontSize:"1.6rem"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{fontSize:"1.6rem"}}>
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <button className="btn btn-primary p-3" style={{fontSize:"1.5rem"}}>Your Balance:{amount}</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
