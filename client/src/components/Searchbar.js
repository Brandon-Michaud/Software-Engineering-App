import React, {useState} from 'react';
// Search bar for homepage

 function Searchbar(props){

    const{searchData} = props;
    

    /*
    SearchText is the information that the user enter
    setSearch is the function and we will pass it SearchData
    */
    const[SearchText,setSearch] = React.useState("");

    /*
    this handles the input of the user and pass it into searchInput
    */
    const inputHandeler = (e) => {
        const searchInput = e.target.value;
        setSearch(searchInput);

    }

    // this handle the action hen user press enter for search bar
    const searchButtonHandeler = (e) => {

        if(e.key == "Enter"){

            searchData(SearchText);

        }
    }
/*

Below we return the the button press funtion and on type 
*/
    return (
       <React.Fragment>
            <div >
                <input className='input' 
                type ='text' 
                placeholder='Enter Food Here'
                ontype = {inputHandeler}
                onButtonPress={searchButtonHandeler}
                dataValue = {SearchText}
                />
                <button>Search</button>
            </div>
         </React.Fragment>
    )
}

export default Searchbar;

