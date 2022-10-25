import React, { Component, useState } from 'react';

const Search = () => {
    const [searchVal, setSearch] = useState("");

    const inputChange = (e) => {
        setSearch(e.target.value);
    }

    const searchKey = () => {
        console.log(searchVal)
        fetch(`http://localhost:3001/api/globalSearches/search?filter=${searchVal}`)
            .then(response => response.json())
            .then(data => console.log(data));
 
    }
    return (
        <div class="container" style={{ height: "300px", marginTop: "70px", marginLeft: "20%" }}>
            <div class="form-group">
                <div className="row">
                    <div class="col-sm-8">
                        <input type="text" onChange={inputChange} value={searchVal} class="form-control" id="email" placeholder="Search tag" name="search" />

                    </div>
                    <div class="col-sm-2">
                        <button style={{ width: "115px", height: "53px" }} type="submit" class="btn btn-primary" onClick={searchKey}>Search</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Search;