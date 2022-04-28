import React from 'react';
import Searchbar from './Searchbar';
import './Home.css'

// Define a functional component for the home page
function Home({user, login}){
    return (
        <div className='home'>
            <Searchbar user={user} login={login}/>
        </div>
    )
}

export default Home;