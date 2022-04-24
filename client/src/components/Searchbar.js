import React, {useState} from 'react';
import './Searchbar.css'

 function Searchbar({user}){

    const [searchResults, setSearchResults] = useState([])
    const [suggestions, setSuggestions] = useState([])
    const [searchInput, setSearchInput] = useState('');

    const searchHandler = (event) => {
        setSearchInput(event.target.value)
        if (event.target.value.length === 0) {
            setSuggestions([])
        }
        else {
            fetch(`http://localhost:9000/api/${encodeURIComponent(event.target.value)}`)
            .then(response => response.json())
            .then(data => {
                setSuggestions(data.foods)
            })
        }
    }

    const buttonHandler = (index) => {
        setSearchInput(suggestions[index].description)
        setSuggestions([])
    }

    const formHandler = (event) => {
        event.preventDefault()
        fetch(`http://localhost:9000/api/${encodeURIComponent(event.currentTarget.elements.textInput.value)}`)
        .then(response => response.json())
        .then(data => {
            setSearchResults(data.foods)
        })
        setSearchInput('')
        setSuggestions([])
    }

    const addFoodHandler = (food) => {
        if (user === null) {
            alert('Log in or sign up to access this function')
        }
        else {
            fetch('http://localhost:9000/addFood', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify([user, food])
            }).then(console.log("Food added to list"))
        }
    }

    return (
        <>
            <div className="searchBar">
                <form className="searchInput" onSubmit={formHandler}>
                    <input type="text" autocomplete='off' placeholder='Enter a food' onChange={searchHandler} value={searchInput} className="search" id="textInput"/>
                    <button className='searchButton'>Search</button>
                </form>
            </div>
            <div className="data">
                {suggestions.map((value, key) => {
                    return (
                        <button className='dataItem' onClick={() => {buttonHandler(key)}}>
                            <p>{value.description}</p>
                        </button>
                    );
                })}
            </div>
            <div className="results">
                {searchResults.map((value, key) => {
                    return (
                        <div className='resultItem'>
                            <p>{value.description}</p>
                            <ul>
                                <li>Protein: {value.foodNutrients[0].value}</li>
                                <li>Fat: {value.foodNutrients[1].value}</li>
                                <li>Carbohydrates: {value.foodNutrients[2].value}</li>
                            </ul>
                            <button className='addFood' onClick={() => {addFoodHandler(value)}}>Add to my foods list</button>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default Searchbar;

