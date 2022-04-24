import React from 'react';
import Searchbar from './Searchbar';
import './Home.css'

 function Home({user}){
    return (
        <div className='home'>
            <Searchbar user={user}/>
        </div>
    )
}

export default Home;