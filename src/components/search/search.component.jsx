import React from "react";

import './search.styles.css';

const Search = () => {
    
    return (
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2 d-none d-lg-block" type="search" placeholder="Căutare" aria-label="Cautare"></input>
            <button className="btn btn-outline-success my-2 my-sm-0 d-none d-lg-block" type="submit">Căutare</button>
        </form>
    );
}

export default Search;