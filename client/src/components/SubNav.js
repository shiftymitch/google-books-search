import React from "react";
import { Link } from "react-router-dom";

function SubNav() {
    return (
        <div>
            <Link to={"/"} ><button className="btn btn-sm btn-secondary mr-3">Search</button></Link>
            <Link to={"/saved"} ><button className="btn btn-sm btn-secondary">Saved</button></Link>
        </div>
    )
}

export default SubNav;