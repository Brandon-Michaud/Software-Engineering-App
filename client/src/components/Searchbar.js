import React, {useEffect, useState} from 'react';
import './Searchbar.css'

 function Searchbar(){

    const [searchResults, setSearchResults] = useState(null)

    //${encodeURIComponent(searchInput)}
    const searchHandler = (event) => {
        fetch(`http://localhost:9000/api/${encodeURIComponent(event.target.value)}`)
        .then(response => response.json())
        .then(data => {
            setSearchResults(data)
        })
    }

    useEffect(() => {
        console.log(searchResults)
    }, [searchResults])

    if (searchResults == null) {
        return (
            <div className="searchBar">
                <form className="searchInput">
                    <input type="text" placeholder='Enter a food' onChange={searchHandler} className="search"/>
                    <button className='searchButton'>Search</button>
                </form>
                <div className="data">
                    
                </div>
            </div>
        )
    }
    else {
        return (
            <>
                <div className="searchBar">
                    <form className="searchInput">
                        <input type="text" placeholder='Enter a food' onChange={searchHandler} className="search"/>
                        <button className='searchButton'>Search</button>
                    </form>
                    <div className="data">
                        {searchResults.foods.map((value, key) => {
                            return (
                                <div className='dataItem'>
                                    <p>{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default Searchbar;

