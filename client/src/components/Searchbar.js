import React, {useEffect, useState} from 'react';
import './Searchbar.css'

 function Searchbar(){

    const [searchResults, setSearchResults] = useState(null)

    const searchHandler = (event) => {
        fetch(`http://localhost:9000/api/${encodeURIComponent(event.target.value)}`)
        .then(response => response.json())
        .then(data => {
            setSearchResults(data)
        })
    }

    const buttonHandler = (index) => {
        
    }

    useEffect(() => {
        console.log(searchResults)
    }, [searchResults])

    if (searchResults == null) {
        return (
            <>
                <div className="searchBar">
                    <form className="searchInput">
                        <input type="text" placeholder='Enter a food' onChange={searchHandler} className="search" id="textInput"/>
                        <button className='searchButton'>Search</button>
                    </form>
                </div>
                <div className="data">
                        
                </div>
                <div className="results">

                </div>
            </>
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
                </div>
                <div className="data">
                    {searchResults.foods.map((value, key) => {
                        return (
                            <button className='dataItem' onClick={() => {buttonHandler(key)}}>
                                <p>{value.description}</p>
                            </button>
                        );
                    })}
                </div>
                <div className="results">

                </div>
            </>
        )
    }
}

export default Searchbar;

