import React from 'react';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import './Home.css'

 function Home(){
    return (
        <div className='home'>
            <Navbar />
            <Searchbar />
        </div>
    )
}

export default Home;