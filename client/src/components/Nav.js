import React from "react";
import SubNav from "./SubNav";

function Nav() {
    return <nav className="navbar navbar-expand-lg navbar-dark position-sticky">
        <img src="/img/shiftycx_logo.svg" width="125px" className="d-inline-block align-top mr-4 ml-4" alt=""></img>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
                <a className="nav-item nav-link" href="https://shiftymitch-portfolio.herokuapp.com">portfolio</a>
                <a className="nav-item nav-link" href="https://shiftymitch-portfolio.herokuapp.com/about">about</a>
                <a className="nav-item nav-link" href="https://shiftymitch-portfolio.herokuapp.com/contact">contact</a>
                <div className="nav-item nav-link">
                    <SubNav />
                </div>
            </div>
            
        </div>
    </nav>
}

export default Nav;