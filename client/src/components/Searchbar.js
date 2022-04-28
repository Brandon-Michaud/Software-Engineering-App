import React, {useState} from 'react';
import './Searchbar.css'

 function Searchbar({user, login}){

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
            }).then(
                fetch(`http://localhost:9000/login/${encodeURIComponent(user.email)}/${encodeURIComponent(user.password)}`)
                .then(response => response.json())
                .then(data => {
                    login(data)
                })
            )
            
        }
    }

    const countNumberAdded = (food) => {
        let num = 0;
        user.foods.forEach(element => {
            if (element.fdcId === food.fdcId) {
                ++num;
            }
        })
        return num;
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
                            <ul className='macros'>
                                <li className='subLabel'>Macronutrients</li>
                                <li>Protein: {value.foodNutrients[0].value}g</li>
                                <li>Fat: {value.foodNutrients[1].value}g</li>
                                <li>Carbohydrates: {value.foodNutrients[2].value}g</li>
                            </ul>
                            <ul className="vitamins">
                                <li className="subLabel">Vitamins</li>
                                <li>A: {value.foodNutrients[20].value}mcg</li>
                                <li>C: {value.foodNutrients[28].value}mg</li>
                                <li>D: {value.foodNutrients[24].value}mcg</li>
                                <li>E: {value.foodNutrients[23].value}mg</li>
                                <li>K: {value.foodNutrients[36].value}mcg</li>
                                <li>Thiamine: {value.foodNutrients[29].value}mg</li>
                                <li>Riboflavin: {value.foodNutrients[30].value}mg</li>
                                <li>Niacin: {value.foodNutrients[31].value}mg</li>
                                <li>B-6: {value.foodNutrients[32].value}mg</li>
                                <li>B-12: {value.foodNutrients[34].value}mcg</li>
                                <li>Folate: {value.foodNutrients[33].value}mcg</li>
                            </ul>
                            <ul className="minerals">
                                <li className="subLabel">Minerals</li>
                                <li>Calcium: {value.foodNutrients[10].value}mg</li>
                                <li>SodiumL {value.foodNutrients[15].value}mg</li>
                                <li>Potassium: {value.foodNutrients[14].value / 1000}g</li>
                                <li>Magnesium: {value.foodNutrients[12].value}mg</li>
                                <li>Phosphorous: {value.foodNutrients[13].value}mg</li>
                                <li>Iron: {value.foodNutrients[11].value}mg</li>
                                <li>Zinc: {value.foodNutrients[16].value}mg</li>
                                <li>Copper: {value.foodNutrients[17].value * 1000}mg</li>
                                <li>Selenium: {value.foodNutrients[18].value}mcg</li>
                            </ul>
                            <p className='numAdded'>Number Eaten Today: {countNumberAdded(value)}</p>
                            <button className='addFood' onClick={() => {addFoodHandler(value)}}>Add to my foods list</button>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default Searchbar;

